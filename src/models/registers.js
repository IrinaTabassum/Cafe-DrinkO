const mongoose = require("mongoose");
const employe = new mongoose.Schema({
    fname:{
        type: String,
        required:true
    },
    lname:{
        type: String,
        required:true
    },
    email:{
        type: String,
        required:true,
        unique: true
    },
    password:{
        type:String,
        required:true,
        unique:true
    },
    Cpassword:{
        type:String,
        required:true,
        unique:true
    }
});

const Register = new mongoose.model("Registerinfo",employe);
module.exports= Register;