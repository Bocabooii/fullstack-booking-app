// Import the Express module
const express = require('express');

// Create an instance of an Express application
const app = express();
const cors = require('cors');
const { default: mongoose } = require('mongoose');
const User = require('./models/User.js');

const bcrypt = require('bcryptjs')
const bcryptSalt = bcrypt.genSaltSync(10);


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


app.post('/register', async (req,res) => {
  const {name, email, password} = req.body;
  const newUser = await User.create ({
    name,
    email,
    password:bcrypt.hashSync(password, bcryptSalt),
  })

  res.json(newUser);
})
// Start the server and listen for connections on port 4000
app.listen(4000, () => {
  console.log('Server is listening on port 4000');
});
