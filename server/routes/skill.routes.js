const express = require("express");
const {
  newSkill,
  getAllSkills,
  getSkill,
  findSkillByCategory,
  findSkillByUser,
} = require("../controllers");
const skillRoute = express.Router();

skillRoute.post("/new", newSkill);
skillRoute.get("/get/all", getAllSkills);
skillRoute.get("/get/:skillId", getSkill);
skillRoute.get("/get/:category", findSkillByCategory);
skillRoute.get("/get/:user", findSkillByUser);

module.exports = skillRoute;
