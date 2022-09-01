const {mongoose} = require('../config/db');
let UserSchema = {   
            name: String, 
            username: String
};
const User = mongoose.model('User',UserSchema );

exports.User= User;

