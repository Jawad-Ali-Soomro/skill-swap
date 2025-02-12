const express = require("express");
const { newPost, getAllPosts, likePost } = require("../controllers");
const postRoute = express.Router();

postRoute.post("/new", newPost);
postRoute.get("/get-all", getAllPosts);
postRoute.post("/like/:postId", likePost);

module.exports = postRoute;
