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

const likePost = async (req, res) => {
  try {
    const { userId } = req.body;
    const { postId } = req.params;

    if (!userId || !postId) {
      return res
        .status(400)
        .json({ message: "User ID and Post ID are required" });
    }

    const user = await User.findById(userId);
    const post = await Post.findById(postId);

    if (!user || !post) {
      return res.status(404).json({ message: "User or Post not found" });
    }

    const isLiked = post.likes.includes(userId);

    if (isLiked) {
      post.likes = post.likes.filter((id) => id.toString() !== userId);
      user.likedPosts = user.likedPosts.filter(
        (id) => id.toString() !== postId
      );
    } else {
      post.likes.push(userId);
      user.likedPosts.push(postId);
    }

    await user.save();
    await post.save();

    res.json({
      message: isLiked ? "Post unliked" : "Post liked",
      likes: post.likes, // Sending updated likes array
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error processing request", error: error.message });
  }
};

module.exports = { newPost, getAllPosts, likePost };
