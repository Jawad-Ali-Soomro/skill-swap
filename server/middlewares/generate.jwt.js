const jwt = require("jsonwebtoken");

const generateToken = (userInfo) => {
  return jwt.sign({ userInfo }, process.env.JWT_SECRET, { expiresIn: "7d" });
};

module.exports = generateToken;
