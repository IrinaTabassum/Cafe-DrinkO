const mongoose = require("mongoose");
const forSms = new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    email:{
        type: String,
        required:true,
        unique: true
    },
    Massege:{
        type:String,
        required:true
    }

});

const Masseges = new mongoose.model("Masseginfo",forSms);
module.exports= Masseges;