const express = require("express");
const userRoute = require("./user.routes");
const skillRoute = require("./skill.routes");
const postRoute = require("./post.routes");
const routes = express.Router();

routes.use("/user", userRoute);
routes.use("/skill", skillRoute);
routes.use("/post", postRoute);

module.exports = routes;
