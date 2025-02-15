const { Skill } = require("../models");

const newSkill = async (req, res) => {
  try {
    const createdSkill = await Skill.create(req.body);
    if (createdSkill) {
      return res.status(200).json({
        msg: "Skill Created!",
        createdSkill,
      });
    }
  } catch (error) {
    return res.status(500).json({
      msg: "Error",
      error: err.message,
    });
  }
};

module.exports = {
  newSkill,
};
