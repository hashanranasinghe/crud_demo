const mongoose = require('mongoose')
var scheme = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    gender:String,
    status:String
})
const userDb = mongoose.model('userDb',scheme);
module.exports = userDb