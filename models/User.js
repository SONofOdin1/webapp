// Bring in mongoose
const mongoose = require('mongoose');

// const UserSchema = new mongoose.Schema({Follow below comments})
const UserSchema = new mongoose.Schema({
    // create name with {type: String & required:true}
    name: {
        type: String,
        required: true
    },
    // create email with {type: String, required: true, unique: true}
    email: {
        type: String,
        required: true,
        unique: true
    },
    // create password with {type: String & required: true}
    password: {
        type: String,
        required: true
    },
    // create avatar with {type: String}
    avatar: {
        type:String
    },
    // create date with {type:Date.now, default: Date.now}
    date: {
        type: Date.now,
        default: Date.now
    }
});

// module export User to mongoose.model('user or anything you created', UserSchema or anything you created)

module.exports = User = mongoose.model('https', UserSchema);