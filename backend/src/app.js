const bodyParser = require("body-parser")
const cors = require("cors");
const express = require("express");
const authRouter = require("./routes/auth");
const userRouter = require("./routes/user");
const postRouter = require("./routes/post");
class App {
  constructor() {
    this.server = express();
    this.middleware();
    this.routes();
  }
  middleware() {
    this.server.use(cors());
    this.server.use(express.json());
    this.server.use(express.urlencoded({ extended: true }));
    this.server.use(bodyParser.json());
  }
  routes() {
    this.server.use('/api', authRouter);
    this.server.use('/api', userRouter);
    this.server.use('/api', postRouter);
  }
}

module.exports = App;
