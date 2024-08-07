// Import the Express module
const express = require('express');

// Create an instance of an Express application
const app = express();
const cors = require('cors');
const { default: mongoose } = require('mongoose');
const User = require('./models/User.js');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const CookieParser = require('cookie-parser');
const cookieParser = require('cookie-parser');

const bcryptSalt = bcrypt.genSaltSync(10);
const jwtSecret = 'sdkfjljaksj4k5j53045923'


require('dotenv').config()

app.use(express.json());
app.use(cookieParser());
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
  try {
    const newUser = await User.create ({
      name,
      email,
      password:bcrypt.hashSync(password, bcryptSalt),
    })
    res.json(newUser);
} catch(e) {
  res.status(422).json(e);
}

});


app.post('/login', async (req,res) => {
  const {email,password} = req.body;
  const userLogin = await User.findOne({email});
  if (userLogin) {
    const passOk = bcrypt.compareSync(password, userLogin.password)
    if (passOk) {
      jwt.sign({email:userLogin.email, id:userLogin._id}, jwtSecret, {}, (err,token) => {
          if (err) throw err;
          res.cookie('token', token).json(userLogin);
        });
    } else {
      res.json("password not ok");
    }
  } else {
    res.status(422).json("not found");
  }
});

app.get('/profile', (req,res) => {
  const {token} = req.cookies;
  if (token) {
    jwt.verify(token, jwtSecret, {}, (err, user) =>{
      if (err) throw err;
      res.json(user);
    })
  } else {
    res.json(null)
  }
})

// Start the server and listen for connections on port 4000
app.listen(4000, () => {
  console.log('Server is listening on port 4000');
});

