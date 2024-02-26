
const registrationSchema = require("../model/regschma")

let registrationcontroller =(req,res)=>{
   const{name,email,password}=req.body;

   let newuser = new registrationSchema({
    name:name,
    email:email,
    password:password
   })
   newuser.save(),
   res.send(newuser)
}






module.exports = registrationcontroller;