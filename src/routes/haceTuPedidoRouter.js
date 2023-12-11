//Importamos Express
const express = require("express");

//Ejecutamos método Router de Express
const router = express.Router();

//Importamos el controlador de haceTuPedido
const haceTuPedidoController = require("../controllers/haceTuPedidoController");

//Procesamos el pedido GET con ruta /
router.get('/', haceTuPedidoController.index);

//Exportamos la variables Router para ser requerida
module.exports = router;