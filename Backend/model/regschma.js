const mongoose = require("mongoose");
const {Schema} = mongoose;

const registrationSchema = new Schema({
    name:String,
    email:String,
    password:String
})

module.exports = mongoose.model("newuser",registrationSchema);