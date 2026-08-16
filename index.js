// Import required core modules and third-party libraries
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// Load environment variables from .env file into process.env
dotenv.config();

// Initialize connection to MongoDB database
connectDB();

// Initialize the Express application
const app = express();

// Middleware to parse incoming request body as JSON
app.use(express.json());

// Root test route to verify API availability
app.get('/', (req, res) => {
  res.send('Portfolio API is running...');
});

// Import and register project-related routes
const projectRoutes = require('./routes/project-routes');
app.use('/api/projects', projectRoutes);

// Define the server port from environment variables, defaulting to 5000
const PORT = process.env.PORT || 5000;

// Start listening for incoming HTTP requests
app.listen(PORT, () => {
  console.log(`Portfolio Server running on http://localhost:${PORT}`);
});