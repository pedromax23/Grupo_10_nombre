const {check} = require ("express-validator");
const db = require("../../database/models");


const validacionEdicion = [
    check('nombre')
    .notEmpty().withMessage('El campo nombre no puede estar vacio'),

    check('categoria')
    .notEmpty().withMessage('El campo Categoria no puede estar vacio'),

    check('precio')
    .notEmpty().withMessage('El campo Precio no puede estar vacio'),

    check('stock')
    .notEmpty().withMessage('El campo Stock no puede estar vacio'),

    check('alcohol_content')
    .notEmpty().withMessage('El campo Alcohol Content no puede estar vacio'),

    check('imagenCerveza')
    .isIn(".jpg", ".jpeg", ".png")
    .withMessage("Ese formato de imagen no es valido").bail()
]

module.exports = validacionEdicion; 