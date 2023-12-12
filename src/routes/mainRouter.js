const express = require("express");
const router = express.Router();

const mainController = require("../controllers/mainController");
router.get('/', mainController.index);

//Procesamos el pedido GET con ruta /crearProducto
router.get('/crearProducto',mainController.crear); //Ver

//Procesamos el pedido GET con ruta /editarProducto
router.get('/editarProducto',mainController.editar);

module.exports = router;