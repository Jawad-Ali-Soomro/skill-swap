const { Skill, User } = require("../models");

const newSkill = async (req, res) => {
  try {
    const { userId } = req.body;
    const foundUser = await User.findById(userId);
    const createdSkill = await Skill.create({ ...req.body, user: userId });
    if (createdSkill) {
      foundUser.skills.push(createdSkill._id);
      await foundUser.save();
      return res.status(200).json({ msg: "Skill Created!", createdSkill });
    }
  } catch (error) {
    return res.status(500).json({ msg: "Error", error: error.message });
  }
};

const getSkill = async (req, res) => {
  try {
    const { skillId } = req.params;
    const foundSkill = await Skill.findById(skillId);
    if (foundSkill) {
      return res.status(200).json({ msg: "Found Skill", foundSkill });
    }
  } catch (error) {
    return res.status(500).json({ msg: "Error", error: error.message });
  }
};

const getAllSkills = async (req, res) => {
  try {
    const allSkills = await Skill.find({}).populate("user", "avatar userName");
    if (allSkills) {
      return res.status(200).json({ msg: "Found Skills", allSkills });
    }
  } catch (error) {
    return res.status(500).json({ msg: "Error", error: error.message });
  }
};

const findSkillByCategory = async (req, res) => {
  try {
    const { category } = req.params;
    const foundSkills = await Skill.find({ category });
    if (foundSkills) {
      return res.status(200).json({ msg: "Found Skills", foundSkills });
    }
  } catch (error) {
    return res.status(500).json({ msg: "Error", error: error.message });
  }
};

const findSkillByUser = async (req, res) => {
  try {
    const { user } = req.params;
    const foundSkills = await Skill.find({ user });
    if (foundSkills) {
      return res.status(200).json({ msg: "Found Skills", foundSkills });
    }
  } catch (error) {
    return res.status(500).json({ msg: "Error", error: error.message });
  }
};

module.exports = {
  newSkill,
  getSkill,
  getAllSkills,
  findSkillByCategory,
  findSkillByUser,
};
