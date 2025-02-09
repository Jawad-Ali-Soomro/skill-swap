const { newPost, getAllPosts } = require("./post.controller");
const {
  newUser,
  loginUser,
  getProfile,
  updateProfile,
  toggleFollow,
  suggestUsers,
  getUserInfo,
} = require("./user.controller");

module.exports = {
  newUser,
  loginUser,
  getProfile,
  updateProfile,
  toggleFollow,
  suggestUsers,
  getUserInfo,
  newPost,
  getAllPosts,
};
