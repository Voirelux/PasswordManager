const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/PasswordManager');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: String,
    password: String
});

