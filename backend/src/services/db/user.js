const prisma = require("../../config/prisma");

async function getUserById(id) {
  try {
    const user = await prisma.user.findUnique({
      where: { id },
    });
    return user;
  } catch (err) {
    console.log(err);
  }
}
async function getUserByEmail(email) {
  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });
    return user;
  } catch (err) {
    console.log(err);
  }
}
async function getUserByFullName(fullName) {
  try {
    const user = await prisma.user.findMany({
      where: { fullName },
    });
    return user;
  } catch (err) {
    console.log(err);
  }
}
async function createUser({ email, fullName, password, photo }) {
  try {
    const user = await prisma.user.create({
      data: {
        email,
        fullName,
        password,
        photo
      },
    });
    return user;
  } catch (err) {
    console.log(err);
  }
}
async function deleteUser(id) {
  try {
    const user = await prisma.user.delete({
      where: { id },
    });
    return user;
  } catch (err) {
    console.log(err);
  }
}
async function updatePhoto(id, photo) {
  try {
    const user = await prisma.user.update({
      where: { id },
      data: {
        photo,
      },
    });
    return user;
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  getUserById,
  getUserByEmail,
  getUserByFullName,
  createUser,
  updatePhoto,
  deleteUser
}