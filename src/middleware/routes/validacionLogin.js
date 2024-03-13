const {check} = require ("express-validator");
const db = require("../../database/models");
const bcrypt = require('bcryptjs');

const validacionLogin = [
    check ("user_name")
    .notEmpty()
    .withMessage("El campo nombre no puede estra vacío")
    .bail()
    .custom (async (user_name) => {
        const existingUser = await db.User.findOne({
                    where: {
                        user_name: user_name
                    }
                }
            );
        if (!existingUser) {
          throw new Error("El Usuario no está registrado")
        }
    }),
    
    check("clave")
    .notEmpty()
    .withMessage("El campo contraseña no puede estra vacío")
]

module.exports = validacionLogin; 