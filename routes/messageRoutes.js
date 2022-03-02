const express = require('express')

const router = express.Router();

function messageRouter(controller) {
  // router.get("/", controller.createChat.bind(controller));
  // router.get("/:userAddress", controller.getUserByAdd.bind(controller));
  // router.post("/", controller.doCreateUser.bind(controller));
  // router.put("/", controller.editUserByAdd.bind(controller));

  return router;
}

module.exports = messageRouter