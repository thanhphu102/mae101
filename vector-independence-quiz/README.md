# Vector Independence Quiz

This project is a web-based quiz application designed to test knowledge on the topic of vector independence and dependence in linear algebra. The quiz consists of multiple-choice questions that assess the user's understanding of these concepts.

## Project Structure

The project is organized as follows:

```
vector-independence-quiz
├── public
│   ├── index.html       # HTML structure for the quiz application
│   └── style.css        # CSS styles for the quiz application
├── src
│   ├── app.js           # Main JavaScript logic for the quiz application
│   └── questions.js     # Array of question objects for the quiz
├── package.json         # Configuration file for npm
└── README.md            # Documentation for the project
```

## Getting Started

To run the quiz application locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd vector-independence-quiz
   ```

2. **Install dependencies**:
   Make sure you have Node.js installed. Then run:
   ```bash
   npm install
   ```

3. **Run the application**:
   You can use a simple HTTP server to serve the `public` directory. For example, you can use `http-server`:
   ```bash
   npx http-server public
   ```

4. **Open your browser**:
   Navigate to `http://localhost:8080` (or the port specified by your server) to access the quiz application.

## Features

- Multiple-choice questions about vector independence and dependence.
- User-friendly interface with clear instructions.
- Immediate feedback on answers.

## Contributing

Contributions are welcome! If you have suggestions for improvements or additional questions, feel free to submit a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.