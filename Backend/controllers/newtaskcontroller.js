const taskSchema = require("../model/newtaskschma")

let newtaskcontroller = (req,res)=>{
    const{title,detail}=req.body;
    const task =new taskSchema({
        title:title,
        detail:detail
    })
    task.save()
    res.send(task)
}

module.exports= newtaskcontroller;