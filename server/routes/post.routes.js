const express = require("express");
const { newPost, getAllPosts } = require("../controllers");
const postRoute = express.Router();

postRoute.post("/new", newPost);
postRoute.get("/get-all", getAllPosts);

module.exports = postRoute;
