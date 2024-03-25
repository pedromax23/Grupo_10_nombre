const db = require('../../database/models')
const User = db.User;

const controller = {
    allUsers: async (req, res) => {
        let usuarios = await User.findAll()
        
        res.json({
            count: usuarios.length,
            users: usuarios
        })
    },

    findUser: async (req, res) => {
        let usuario = await User.findByPk(req.params.id)

        res.json(usuario)
    }
}

module.exports = controller;