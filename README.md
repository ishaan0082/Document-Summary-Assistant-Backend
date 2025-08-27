# Document-Summary-Assistant-Backend

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

The application will be available at http://localhost:3001.

API Documentation
Here are the details of the available API endpoints.

Summarize Text
Endpoint: /api/summarize

Method: POST

Description: Generates a summary for the provided text.

Request Body (JSON):

JSON

{
  "text": "Your long piece of text goes here...",
  "length": "one-paragraph"
}
Example Response (JSON):

JSON

{
  "result": "This is the generated concise summary of the text."
}
Extract Key Points
Endpoint: /api/key-points

Method: POST

Description: Extracts the main bullet points from the provided text.

Request Body (JSON):

JSON

{
  "text": "Your long piece of text goes here..."
}
Example Response (JSON):

JSON

{
  "result": "- This is the first key point.\n- This is the second key point."
}
Example Usage with curl
Summarize:

Bash

curl -X POST http://localhost:3001/api/summarize \
-H "Content-Type: application/json" \
-d '{
      "text": "Superconductivity is a set of physical properties observed in certain materials where electrical resistance vanishes and magnetic flux fields are expelled from the material. Any material exhibiting these properties is a superconductor.",
      "length": "one-sentence"
    }'
Key Points:

Bash

curl -X POST http://localhost:3001/api/key-points \
-H "Content-Type: application/json" \
-d '{
      "text": "Superconductivity is a set of physical properties observed in certain materials where electrical resistance vanishes and magnetic flux fields are expelled from the material. Any material exhibiting these properties is a superconductor."
    }'
🤝 Contributing
Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

Fork the Project

Create your Feature Branch (git checkout -b feature/AmazingFeature)

Commit your Changes (git commit -m 'Add some AmazingFeature')

Push to the Branch (git push origin feature/AmazingFeature)

Open a Pull Request

📜 License
Distributed under the MIT License. See LICENSE for more information.

<p align="center">
Made with ❤️ by Your Name
</p>
