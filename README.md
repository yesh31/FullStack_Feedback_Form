# Feedback Form Application

This project is a simple feedback form built using **React** and **Bootstrap** for the frontend, and **Node.js**, **Express**, and **MongoDB** for the backend. Users can provide their feedback by entering their username and a feedback message. The feedback data is then saved in a MongoDB database.

## Features

### Frontend
- **Input Fields**: The form includes two input fields—one for the **username** and another for the **feedback**.
- **Form Validation**: The submit button is disabled until both fields are filled in, ensuring that users cannot submit an incomplete form.
- **User Feedback**: Upon submitting the form, the user will receive an alert message in the format:
  - `"Hey [username], thanks for the feedback!!!"`
  
### Backend
- **Express Server**: The backend is built with **Express.js**.
- **MongoDB Storage**: The feedback data (username and feedback) is stored in a MongoDB database.
- **REST API**: The backend provides an API endpoint (`POST /addfeedback`) to accept feedback and save it to the database.

## Project Structure

- **Frontend**: Developed using React with Bootstrap for a clean and simple user interface.
- **Backend**: Built with Node.js and Express, connected to a MongoDB database.

### Backend Code (`server.js`)
- A MongoDB connection is established via **Mongoose**.
- A single endpoint (`/addfeedback`) accepts feedback data in JSON format (username and feedback).
- The feedback is saved to the MongoDB collection.
- The server listens on port 7000.

## Prerequisites

Before running the project, ensure you have the following installed:
- **Node.js**: (https://nodejs.org/)
- **MongoDB**: (https://www.mongodb.com/)
- **npm**: Node.js package manager (installed with Node.js)

## How to Run the Project

### Backend Setup:
1. Clone the repository to your local machine.
2. Ensure MongoDB is running on your system.
3. Navigate to the project’s backend folder and install the dependencies:
   bash: npm install
4. Run the server:
   bash: node server.js
   The backend server will start on port 7000.

### Frontend Setup:
1. Navigate to the `frontend -> bookfairapp` folder.
2. Install the dependencies:
   bash: npm install
3. Start the React app:
   bash: npm start
   The React app will run on `http://localhost:3000/`.

## Usage

- Open the application in the browser (`http://localhost:3000/`).
- Fill in both the **Username** and **Feedback** fields.
- Click on the **Submit** button to send your feedback.
- An alert will appear thanking the user by name, and the feedback will be stored in the MongoDB database.
