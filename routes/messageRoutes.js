const express = require('express')

const startRouters = express.Router();

function startRoutesFunc(controller) {
  startRouters.get("/", controller.getUsers.bind(controller));
  startRouters.get("/:userAddress", controller.getUserByAdd.bind(controller));
  startRouters.post("/", controller.doCreateUser.bind(controller));
  startRouters.put("/", controller.editUserByAdd.bind(controller));
  // Test if server working to receive message
  startRouters.get("/test", (req, res) => {
    res.send('<h1>Hello world</h1>');
  });
  return startRouters;
}

module.exports = startRoutesFunc