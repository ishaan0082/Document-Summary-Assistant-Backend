// backend/server.js

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import fetch from 'node-fetch';

// Load environment variables from .env file
dotenv.config();

const app = express();
const port = 3001; // Port for the backend server

// Middleware
app.use(cors()); // Allow requests from your React app (running on a different port)
app.use(express.json()); // Allow the server to parse JSON request bodies

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${GEMINI_API_KEY}`;

// Generic function to handle API calls to Gemini
const callGeminiApi = async (prompt, res) => {
    if (!GEMINI_API_KEY) {
        return res.status(500).json({ error: 'API key not configured on the server.' });
    }

    try {
        const response = await fetch(GEMINI_API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error('Gemini API Error:', errorData);
            return res.status(response.status).json({ error: 'Failed to fetch from Gemini API.' });
        }

        const data = await response.json();
        const resultText = data.candidates?.[0]?.content?.parts?.[0]?.text;

        if (resultText) {
            res.json({ result: resultText });
        } else {
            res.status(500).json({ error: 'No content received from Gemini API.' });
        }

    } catch (error) {
        console.error('Server Error:', error);
        res.status(500).json({ error: 'Internal server error.' });
    }
};

// --- API Endpoints ---

// Endpoint for generating summaries
app.post('/api/summarize', async (req, res) => {
    const { text, length } = req.body;
    if (!text || !length) {
        return res.status(400).json({ error: 'Text and length are required.' });
    }
    const prompt = `Provide a ${length} summary for the following text, capturing the key ideas.\n\nText:\n"""\n${text}\n"""`;
    await callGeminiApi(prompt, res);
});

// Endpoint for generating key points
app.post('/api/key-points', async (req, res) => {
    const { text } = req.body;
    if (!text) {
        return res.status(400).json({ error: 'Text is required.' });
    }
    const prompt = `Extract the main key points from the following text. Present them as a concise, bulleted list.\n\nText:\n"""\n${text}\n"""`;
    await callGeminiApi(prompt, res);
});


// Start the server
app.listen(port, () => {
    console.log(`Backend server listening at http://localhost:${port}`);
});
