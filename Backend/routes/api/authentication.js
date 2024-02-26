const express = require("express");
const registrationroutes = require("./registration");
const loginroutes = require("./login");
const authroutes = express.Router();


authroutes.use("/reg",registrationroutes)
authroutes.use("/login",loginroutes)


module.exports = authroutes ;