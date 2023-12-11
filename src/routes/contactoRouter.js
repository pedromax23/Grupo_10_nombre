//Importamos Express
const express = require("express");

//Ejecutamos método Router de Express
const router = express.Router();

//Importamos el controlador de contacto
const contactoController = require("../controllers/contactoController");

//Procesamos el pedido GET con ruta /
router.get('/', contactoController.index);

//Exportamos la variables Router para ser requerida
module.exports = router;