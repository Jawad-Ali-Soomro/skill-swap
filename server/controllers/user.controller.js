const compareToken = require("../middlewares/compare.jwt");
const hashPassword = require("../middlewares/encrypt.password");
const generateToken = require("../middlewares/generate.jwt");
const { User } = require("../models");
const bcrypt = require("bcryptjs");

const newUser = async (req, res) => {
  try {
    const findUser = await User.findOne({ email: req.body.email });
    if (findUser) {
      return res
        .status(409)
        .json({ msg: "The account with this email already exists!" });
    }

    const encrypted = await hashPassword(req.body.password);
    if (!encrypted) {
      return res
        .status(500)
        .json({ message: "Error while encrypting password!" });
    }

    const newUser = await User.create({ ...req.body, password: encrypted });
    return res
      .status(201)
      .json({ message: "Account created successfully!", newUser });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error", error });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const token = generateToken(user);
    return res
      .status(200)
      .json({ message: "Login successful", token, userId: user._id });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error", error });
  }
};

const getProfile = async (req, res) => {
  try {
    const token = req.body.authToken;
    const userId = req.body.authId;
    if (!token) {
      return res.status(500).json({
        message: "Internal server error, token not found!",
      });
    } else {
      const userInfo = await compareToken(token);
      if (!userId) {
        return res.status(401).json({
          message: "Internal server error, Unauthorized!",
        });
      }
      const verifyUser = await User.findById(userId).select("-password");
      if (!userInfo) {
        return res.status(500).json({
          message: "Internal server error, Login token not found!",
        });
      }
      if (verifyUser._id == userInfo.userInfo._id) {
        return res.status(200).json({
          message: "Success, Data Fetched!",
          verifyUser,
        });
      } else {
        return res.json({
          message: "Internal Server Error",
        });
      }
    }
  } catch (error) {
    return res.status(200).json({
      message: "Internal server error",
      error,
    });
  }
};

module.exports = { newUser, loginUser, getProfile };
