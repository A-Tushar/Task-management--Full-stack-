const express = require("express");
const registrationcontroller = require("../../controllers/registrationcontroller");

const registrationroutes =express.Router();
registrationroutes.use(express.json())

registrationroutes.post("/newuser",registrationcontroller)


module.exports= registrationroutes ;