const {check} = require ("express-validator");
const db = require("../../database/models");
const sequelize = db.sequelize; 

const validacionRegister = [
    check ("name")
    .isEmpty()
    .withMessage("El campo nombre no puede estra vacío")
    .bail()
    .isLength({min:2})
    .withMessage("Debe tener como mínimo 2 caracteres"), 

    check ("last_name")
    .isEmpty()
    .withMessage("El campo nombre no puede estra vacío")
    .bail()
    .isLength({min:2})
    .withMessage("Debe tener como mínimo 2 caracteres"), 

    check ("email")
    .isEmpty()
    .withMessage("EL campo email no puede estar vacío")
    .bail()
    .isEmail()
    .withMessage("El email debe tener un formato válido")
    .custom (async (email) => {
        const existingUser = await db.User.findOne({ email });
        if (existingUser) {
          throw new Error("El email ya está registrado")}}),

    check ("password")
    .isEmpty()
    .withMessage("EL campo contraseña no puede estar vacío")
    .bail()
    .isLength({min:8})
    .withMessage("La contraseña debe tener al menos 8 caracteres")
    .bail()
    .matches(/(?=.*[a-z])/ ) // Asegura que haya al menos una letra mayúscula
    .withMessage("La contraseña debe contener al menos una letra minúscula")
    .bail()
    .matches(/(?=.*[A-Z])/ ) // Asegura que haya al menos una letra mayúscula
    .withMessage("La contraseña debe contener al menos una letra mayúscula")
    .bail()
    .matches(/(?=.*[!@#$%^&*])/) // Asegura que haya al menos un carácter especial
    .withMessage("La contraseña debe contener al menos un carácter especial")
    .matches(/(?=.*\d)/) // Asegura que haya al menos un número
    .withMessage("La contraseña debe contener al menos un número")
    .bail(),

    check ("img")
    .isIn(".jpg", ".jpeg", ".png", ".gif")
]

module.exports = validacionRegister; 