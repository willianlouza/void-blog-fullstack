const {
  createUser,
  getUserByEmail,
} = require("../services/db/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const env = require("../config/env");

//Return user data without password
const secureUserData = (user) => {
  return {
    id: user.id,
    fullName: user.fullName,
    email: user.email,
    photo: user.photo,
  };
};
async function SignUp(req, res) {
  const { fullName, email, password, photo } = req.body;
  if (!email || !password || !fullName) {
    return res.status(400).json({
      message: "O email, senha e nome são obrigatórios.",
    });
  }
  try {
    const userExists = await getUserByEmail(email);
    if (userExists)
      return res.status(400).json({ message: "Email já cadastrado." });

    const salt = await bcrypt.genSalt(12);
    const hash = await bcrypt.hash(password, salt);
    const user = await createUser({
      fullName,
      email,
      password: hash,
      photo,
    });
    const secret = env.TOKEN_SECRET;
    const token = jwt.sign(
      {
        id: user.id,
      },
      secret,
      {
        expiresIn: "30d",
      }
    );

    res.status(201).json({
      token,
      ["user"]: secureUserData(user),
    });
  } catch (err) {
    res.status(500).json({ message: err });
  }
}
async function Login(req, res) {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({
      message: "O email e a senha são obrigatórios.",
    });
  }
  try {
    const user = await getUserByEmail(email);
    if (!user)
      return res.status(400).json({ message: "Esse usuário não existe." });

    const checkPassword = await bcrypt.compare(
      password,
      user.password
    );
    if (!checkPassword)
      return res.status(400).json({ message: "Senha inválida." });

    try {
      const secret = env.TOKEN_SECRET;
      const token = jwt.sign(
        {
          id: user.id,
        },
        secret,
        {
          expiresIn: "30d",
        }
      );
      return res.status(200).json({
        token,
        ["user"]: secureUserData(user),
      });
    } catch (err) {
      return res.status(500).json({ message: "Erro ao assinar senha" });
    }
  } catch (err) {
    res.status(500).json({ message: "Erro ao entrar" });
  }
}

module.exports = {
  secureUserData,
  SignUp,
  Login
}
