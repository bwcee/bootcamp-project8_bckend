const express = require('express')

const startRouters = express.Router();

function startRoutesFunc(controller) {
  startRouters.get("/", controller.getUsers.bind(controller));
  return startRouters;
}

module.exports = startRoutesFunc