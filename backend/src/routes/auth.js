const Router = require("express").Router;
const { Login, SignUp } = require("../controller/auth");

const authRouter = Router();

authRouter.post("/auth/signup", SignUp);
authRouter.post("/auth/login", Login);

module.exports = authRouter;
