const express = require("express");
const { newUser, loginUser, getProfile } = require("../controllers");
const userRoute = express.Router();

userRoute.post("/new", newUser);
userRoute.get("/login", loginUser);
userRoute.post("/profile", getProfile);

module.exports = userRoute;
