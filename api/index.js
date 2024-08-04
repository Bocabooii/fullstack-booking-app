// Import the Express module
const express = require('express');

// Create an instance of an Express application
const app = express();
const cors = require('cors');
const { default: mongoose } = require('mongoose');
require('dotenv').config()

app.use(express.json());
app.use(cors({
  credentials: true,
  origin: 'http://localhost:5173'
}));

mongoose.connect(process.env.MONGO_URL)

// Define a route handler for GET requests to the /test path
app.get('/test', (req, res) => {
  // Send a JSON response with the string 'test ok'
  res.json('test ok');
});


app.post('/register', (req,res) => {
  const {name, email, password} = req.body;
  res.json({name, email, password});
})
// Start the server and listen for connections on port 4000
app.listen(4000, () => {
  console.log('Server is listening on port 4000');
});
