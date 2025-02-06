const bcrypt = require("bcryptjs");
const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  const encrypted = await bcrypt.hash(password, salt);
  return encrypted;
};
module.exports = hashPassword;
