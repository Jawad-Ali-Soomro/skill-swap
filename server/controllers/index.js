const { newPost, getAllPosts, likePost } = require("./post.controller");
const { newSkill } = require("./skill.controller");
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
  likePost,
  newSkill,
};
