const jwt = require("jsonwebtoken");

const compareToken = async (token) => {
  return await jwt.verify(token, process.env.JWT_SECRET);
};

module.exports = compareToken;
