const express = require("express");
const {
  newUser,
  loginUser,
  getProfile,
  updateProfile,
  toggleFollow,
  suggestUsers,
} = require("../controllers");
const userRoute = express.Router();

userRoute.post("/new", newUser);
userRoute.get("/login", loginUser);
userRoute.get("/profile", getProfile);
userRoute.patch("/update/:userId", updateProfile);
userRoute.patch("/toggle-follow/", toggleFollow);
userRoute.get("/suggest/:userId", suggestUsers);

module.exports = userRoute;
