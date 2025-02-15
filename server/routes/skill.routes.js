const express = require("express");
const { newSkill } = require("../controllers");
const skillRoute = express.Router();

skillRoute.post("/new", newSkill);

module.exports = skillRoute;
