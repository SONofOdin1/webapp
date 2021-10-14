// First create express and app
const express = require('express');
const app = express();

// app.get command function res.send 
app.get('/', (req, res) => res.send('Working'));
// Create Port with first const port and create process.env.PORT || and port
const PORT = process.env.PORT || 3000;
// 