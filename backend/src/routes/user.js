const Router = require("express").Router;
const auth = require("../middleware/auth");
const { GetUserData, UpdateUserPhoto } = require("../controller/user");

const userRouter = Router();

userRouter.get("/profile/details", auth, GetUserData);
userRouter.patch("/profile/edit/photo", auth, UpdateUserPhoto)

module.exports = userRouter;
