const {check} = require ("express-validator");
const db = require("../../database/models");


const validacionCreacion = [
    check('nombre')
    .notEmpty().withMessage('El campo nombre no puede estar vacio'),

    check('categoriaCerveza')
    .notEmpty().withMessage('El campo Categoria no puede estar vacio')
]

module.exports = validacionCreacion; 