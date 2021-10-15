// First create express and app and const connectDB to the config folder like ./config/db
const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Use command connectDB like connectDB();

connectDB();

// app.get command function require and respond and res.send 

app.get('/', (req, res) => res.send('My Server is not working'));

// Create Port with first const port and create process.env.PORT || and port

const PORT = process.env.PORT || 3000;

// App.listen (port, use console.log for checking)

app.listen(PORT, () => console.log(`working on ${PORT} port`));



