const express = require("express");
const apiroutes = require("./api");
const secureApi = require("../middelware/secureApi");
const routes = express.Router();

const baseURL = "/api/v1"
routes.use(baseURL,secureApi,apiroutes);

module.exports= routes ;
