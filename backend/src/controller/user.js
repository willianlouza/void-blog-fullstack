const { getUserById, updatePhoto } = require('../services/db/user');
const { secureUserData } = require('./auth');

async function GetUserData(req, res) {
    const uid = req.uid;
    try {
        const user = await getUserById(uid);
        if (!user) {
            return res.status(404).json({ message: "Usuário não encontrado." });
        }
        return res.status(200).json({ ['user']: secureUserData(user) });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
    res.send(`Id: ${req.uid}`)
}
async function UpdateUserPhoto(req, res) {
    const id = req.uid;
    const { photo } = req.body;
    console.log(id)
    try {
        const user = await updatePhoto(id, photo);
        if (!user) {
            return res.status(404).json({ message: "Não foi possível alterar a foto." });
        }
        return res.status(200).json({ ['user']: secureUserData(user) });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}
module.exports = {
    GetUserData,
    UpdateUserPhoto
}