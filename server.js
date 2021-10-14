// First create express and app
const express = require('express');
const { connect } = require('mongoose');
const app = express();

// app.get command function require and respond and res.send 

app.get('/', (req, res) => res.send('My Name is Srivar'));

// Create Port with first const port and create process.env.PORT || and port

const PORT = process.env.PORT || 3000;

// App.listen (port, use console.log for checking)

app.listen(PORT, () => console.log(`working on ${PORT} port`));



