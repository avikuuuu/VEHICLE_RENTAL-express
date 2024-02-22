const express = require("express");

// import controller
const wellcomeController = require("../controllers/wellcome");
const wellcomeRouter = express.Router();

wellcomeRouter.get("/", wellcomeController.greeting);

module.exports = wellcomeRouter;
