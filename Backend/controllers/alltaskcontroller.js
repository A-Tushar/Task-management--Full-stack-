const secureApi = require("../middelware/secureApi");
let taskSchema = require("../model/newtaskschma")


let alltaskcontroller = async (req,res)=>{
    let task = await taskSchema.find();
    res.send(task)
}

module.exports= alltaskcontroller;