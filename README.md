https://github.com/cftcfurkan/react-quiz/assets/90473630/8c88cbdc-872b-4cf5-bf99-8d7fa16d630c

# React Quiz Application

This React Quiz Application is designed to facilitate quizzes by fetching questions and their corresponding answers from a mock API. It utilizes React components to manage the quiz flow, track progress, and display results.

## Features

- **Fetching Questions**: The application fetches quiz questions and answers from a fake API.
- **Timer**: A timer is implemented for each question, allowing a specific duration to answer.
- **Progress Tracking**: Users can track their progress through a progress bar indicating the number of questions answered.
- **Scoring System**: Points are awarded based on correct answers, contributing to the final score.

## Prerequisites

- **Node.js**: Ensure Node.js is installed on your machine to run the application.
- **npm/yarn**: Use npm or yarn package managers to install dependencies and run the application.

## Getting Started

### Installation

1. Clone the repository:
   - git clone <repository_url>
2. Navigate to the project directory:
   - cd react-quiz-app
3. Install dependencies:
   - npm install

### Running the Application

To start the development server and run the application:
  - npm start


This will launch the React Quiz Application in your default web browser.

### Backend (Mock API)

The application uses JSON Server to mimic a backend server for fetching questions. Run the following script to start the mock API:
  - npm run server


The mock API will be available at `http://localhost:8000/questions`.

## Application Structure

### Components

- **Header**: Displays the header section of the application.
- **Main**: Wrapper component encapsulating the main content.
- **Questions**: Renders individual questions during the quiz.
- **Loader**: Indicates loading state while fetching data.
- **Error**: Displays an error message when data fetching fails.
- **StartScreen**: Initial screen for users to begin the quiz.
- **NextQuestion**: Handles navigation to the next question.
- **Progress**: Displays the progress bar and tracks user progress.
- **FinishedScreen**: Shows the final score and allows users to restart the quiz.
- **Footer**: Displays components related to the quiz footer.

### App Structure

The `App.js` file manages the state of the application using React hooks (`useReducer`, `useEffect`). It coordinates the rendering of components based on different states (`loading`, `ready`, `active`, `finished`) and dispatches actions accordingly.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
