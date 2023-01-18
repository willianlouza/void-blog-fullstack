const jwt = require("jsonwebtoken");
const env = require("../config/env");

async function auth(req, res, next) {
  const header = req.headers["authorization"];
  const token = header && header.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Não autorizado." });
  }

  try {
    const secret = env.TOKEN_SECRET;
    const userToken = jwt.verify(token, secret);
    res.locals.uid = userToken.id;
    req.uid = userToken.id;
    return next();
  } catch (err) {
    return res.status(401).json({ message: "Não autorizado." });
  }
}

module.exports = auth;
