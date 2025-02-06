const mongoose = require("mongoose");
const skillSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    language: {
      type: String,
    },
    skillLevel: {
      type: String,
      enum: ["beginner", "intermediate", "expert"],
      required: true,
    },
  },
  { timestamps: true }
);

const Skill = mongoose.model("Skill", skillSchema);
module.exports = Skill;
