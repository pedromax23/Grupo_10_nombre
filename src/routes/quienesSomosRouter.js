//Importamos Express
const express = require("express");

//Ejecutamos método Router de Express
const router = express.Router();

//Importamos el controlador de Quienes Somos
const quienesSomosController = require("../controllers/quienesSomosController");

//Procesamos el pedido GET con ruta /
router.get('/', quienesSomosController.index);

//Exportamos la variables Router para ser requerida
module.exports = router;