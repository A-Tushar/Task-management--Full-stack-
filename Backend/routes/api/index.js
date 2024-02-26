const express = require("express");
const apiroutes = express.Router();

const taskroutes = require("./task");
const authroutes = require("./authentication");



apiroutes.use("/auth",authroutes)
apiroutes.use("/task",taskroutes)

module.exports = apiroutes ;