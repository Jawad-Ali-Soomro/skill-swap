const express = require("express");
const {
  newUser,
  loginUser,
  getProfile,
  updateProfile,
  toggleFollow,
  suggestUsers,
  getUserInfo,
} = require("../controllers");
const { upload, uploadAvatar } = require("../middlewares/uploadImage");
const userRoute = express.Router();

userRoute.post("/new", newUser);
userRoute.post("/login", loginUser);
userRoute.get("/profile", getProfile);
userRoute.patch("/update/:userId", updateProfile);
userRoute.patch("/toggle-follow", toggleFollow);
userRoute.get("/suggest/:userId", suggestUsers);
userRoute.get("/find/:userId", getUserInfo);
userRoute.post("/upload-avatar", upload.single("avatar"), uploadAvatar);

module.exports = userRoute;
