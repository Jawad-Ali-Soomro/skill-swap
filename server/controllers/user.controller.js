const compareToken = require("../middlewares/compare.jwt");
const hashPassword = require("../middlewares/encrypt.password");
const generateToken = require("../middlewares/generate.jwt");
const { User } = require("../models");
const bcrypt = require("bcryptjs");

const newUser = async (req, res) => {
  try {
    const findUser = await User.findOne({ email: req.body.email });
    if (findUser) {
      return res.status(409).json({ msg: "account exists already!" });
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

const updateProfile = async (req, res) => {
  try {
    const { userId } = req.params;
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { ...req.body },
      { new: true }
    );
    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res
      .status(200)
      .json({ message: "Profile updated successfully", user: updatedUser });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

const toggleFollow = async (req, res) => {
  try {
    const { currentUserId, targetUserId } = req.body;

    if (currentUserId === targetUserId) {
      return res.status(400).json({ message: "You can't follow yourself" });
    }
    const currentUser = await User.findById(currentUserId);
    const targetUser = await User.findById(targetUserId);
    if (!currentUser || !targetUser) {
      return res.status(404).json({ message: "User not found" });
    }
    const isFollowing = currentUser.following.includes(targetUserId);
    if (isFollowing) {
      currentUser.following = currentUser.following.filter(
        (id) => id.toString() !== targetUserId
      );
      targetUser.followers = targetUser.followers.filter(
        (id) => id.toString() !== currentUserId
      );
      await currentUser.save();
      await targetUser.save();
      return res
        .status(200)
        .json({ message: "User unfollowed successfully", followed: false });
    } else {
      currentUser.following.push(targetUserId);
      targetUser.followers.push(currentUserId);
      await currentUser.save();
      await targetUser.save();
      return res
        .status(200)
        .json({ message: "User followed successfully", followed: true });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

const suggestUsers = async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });
    const suggestedUsers = await User.find({
      _id: { $nin: [...user.following, userId] },
    }).limit(5);
    res.status(200).json(suggestedUsers);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

const getUserInfo = async (req, res) => {
  const { userId } = req.params;
  const foundUser = await User.findById(userId)
    .populate("skills")
    .populate("followers")
    .populate("following")
    .populate("likedPosts")
    .populate("createdPosts");
  if (foundUser) {
    return res.status(200).json({
      message: "Found",
      foundUser,
    });
  }
};

module.exports = {
  newUser,
  loginUser,
  getProfile,
  updateProfile,
  toggleFollow,
  suggestUsers,
  getUserInfo,
};
