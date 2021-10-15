// bring in express and router with express.Router(); command
const express = require('express');
const router = express.Router();

// I am making this notes not to get confused not compulsory 
// @route   POST /apt/users
// @desc    Register route
// @access  Public

// send text to html or https with router.get instead of app.get
// use the command router.get('/', (req, res) => res.send('Srivar is in users'));

router.get('/', (req, res) => {
    res.send('Srivar is in users')
});

// use command module.exports = router;

module.exports = router;