const { newPost, getAllPosts, likePost } = require("./post.controller");
const {
  findSkillByUser,
  newSkill,
  getAllSkills,
  getSkill,
  findSkillByCategory,
} = require("./skill.controller");
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
  getAllSkills,
  getSkill,
  findSkillByCategory,
  findSkillByUser,
};
