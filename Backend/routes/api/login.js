const express = require("express");
const logincontroller = require("../../controllers/logincontroller");
const loginroutes =express.Router();
loginroutes.use(express.json())


loginroutes.post("/user",logincontroller)



module.exports= loginroutes ;