const multer = require("multer");
const path = require("path");
const { User } = require("../models");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "assets/avatars/");
  },
  filename: (req, file, cb) => {
    const fileExt = path.extname(file.originalname);
    const filename = `avatar-${Date.now()}${fileExt}`;
    cb(null, filename);
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image/")) {
    cb(null, true);
  } else {
    cb(new Error("Only images are allowed!"), false);
  }
};

const upload = multer({ storage, fileFilter });

const uploadAvatar = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    const userId = req.body.userId;
    if (!userId) {
      return res.status(400).json({ message: "User ID is required" });
    }

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.avatar = `/avatars/${req.file.filename}`;
    await user.save();

    res.json({ message: "Avatar updated successfully", avatar: user.avatar });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating avatar", error: error.message });
  }
};

module.exports = { upload, uploadAvatar };
