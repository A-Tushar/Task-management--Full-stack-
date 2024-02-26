const express = require("express");
const newtaskcontroller = require("../../controllers/newtaskcontroller");
const alltaskcontroller = require("../../controllers/alltaskcontroller");
const taskroutes =express.Router();
taskroutes.use(express.json())

taskroutes.post("/newtask",newtaskcontroller)
taskroutes.get("/alltask",alltaskcontroller) 

module.exports= taskroutes ;