// create default.json import mongo URI 
// bring in mongoose, config 
// const db with config.get('mongoURI')
const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

// const connectDB with async function {try{await connect to mongoose to db check with console.log }  catch (err) console.error(err.message) then exit process at 1}; 

const connectDB = async () => {
    try {
        await mongoose.connect(db);

        console.log('Connected to DB');
    } catch (err) {
        console.error(err.message);
        
        process.exit(1);
    }
};

// then module.exports the connectDB command

module.exports = connectDB;