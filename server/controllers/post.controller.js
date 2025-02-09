const { Post, User } = require("../models");

const newPost = async (req, res) => {
  try {
    const { title, description, image, tags, author } = req.body;

    const post = await Post.create({ title, description, image, tags, author });

    await User.findByIdAndUpdate(author, { $push: { createdPosts: post._id } });

    return res.status(201).json({
      message: "Post created successfully!",
      post,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error creating post",
      error,
    });
  }
};

const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find()
      .populate(
        "author",
        "userName handle position email avatar followers following"
      )
      .sort({ createdAt: -1 });

    return res.status(200).json({
      message: "Posts fetched successfully!",
      posts,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error fetching posts",
      error,
    });
  }
};

module.exports = { newPost, getAllPosts };
