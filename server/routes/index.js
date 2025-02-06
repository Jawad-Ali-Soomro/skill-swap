const express = require("express");
const userRoute = require("./user.routes");
const skillRoute = require("./skill.routes");
const routes = express.Router();

routes.use("/user", userRoute);
routes.use("/skill", skillRoute);

module.exports = routes;
