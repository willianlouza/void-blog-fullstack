require("dotenv").config();

module.exports = {
  PORT: process.env.PORT || 8080,
  DATABASE_URL: process.env.DATABASE_URL || "",
  TOKEN_SECRET: process.env.TOKEN_SECRET || "",
};
