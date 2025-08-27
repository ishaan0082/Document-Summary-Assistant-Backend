# Document-Summary-Assistant-Backend
# Document Summary Assistant - Backend

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
![Node.js Version](https://img.shields.io/badge/node.js-18.x%2B-blue.svg)
![Framework](https://img.shields.io/badge/Framework-Express-green.svg)

A powerful and efficient backend service designed to summarize large documents and extract key points using the Gemini API. This server provides a simple RESTful interface, making it easy to integrate summarization and analysis features into your applications.

## ✨ Features

-   **AI-Powered Summarization:** Generate concise summaries of varying lengths.
-   **Key Point Extraction:** Automatically pull out the most important points from a text.
-   **Secure API Key Handling:** Keeps your Gemini API key safe on the server.
-   **RESTful API:** Simple and easy-to-use API endpoints.
-   **Scalable Architecture:** Built with Node.js and Express to handle multiple requests efficiently.

## 🛠️ Tech Stack

-   **Language:** JavaScript (Node.js)
-   **Framework:** Express.js
-   **Libraries:**
    -   `cors` for handling cross-origin requests.
    -   `dotenv` for managing environment variables.
    -   `node-fetch` for making HTTP requests to the Gemini API.

## 🚀 Getting Started

Follow these instructions to get a local copy up and running for development and testing purposes.

### Prerequisites

-   Node.js (v18.x or higher recommended)
-   npm (usually comes with Node.js)

### Installation

1.  **Clone the repository:**
    ```sh
    git clone [https://github.com/ishaan0082/Document-Summary-Assistant-Backend.git](https://github.com/ishaan0082/Document-Summary-Assistant-Backend.git)
    cd Document-Summary-Assistant-Backend
    ```

2.  **Install the required dependencies:**
    ```sh
    npm install
    ```

3.  **Set up environment variables:**
    Create a `.env` file in the root directory and add your Gemini API key.
    ```
    # Replace YOUR_GEMINI_API_KEY with your actual key
    GEMINI_API_KEY="AIzaSy..."
    ```

### Running the Application

Once the setup is complete, you can start the server with the following command:

```sh
npm start
