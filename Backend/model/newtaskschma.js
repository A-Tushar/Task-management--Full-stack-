const mongoose = require("mongoose");
const {Schema} = mongoose;

const taskSchema = new Schema({
    title:String,
    detail:String,
})

module.exports= mongoose.model("task",taskSchema);