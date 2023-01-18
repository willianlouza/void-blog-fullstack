const Router = require("express").Router;
const auth = require("../middleware/auth");
const { CreateNewPost, GetPostById, EditPost, DeletePost, GetOwnPosts, GetAllPosts } = require("../controller/post")

const postRouter = Router();

postRouter.post("/post/new", auth, CreateNewPost);
postRouter.get("/post/:id", auth, GetPostById);
postRouter.patch("/post/:id", auth, EditPost);
postRouter.delete("/post/:id", auth, DeletePost);
postRouter.get("/posts/own", auth, GetOwnPosts);
postRouter.get("/posts/all", GetAllPosts);

module.exports = postRouter;
