//Importamos Express
const express = require("express");

//Ejecutamos método Router de Express
const router = express.Router();

//Importamos el controlador de Producto
const productController = require("../controllers/productController");

//Procesamos el pedido GET con ruta /
router.get('/', productController.index); //Estaría el listado del producto

//Procesamos el pedido GET con ruta //crearProducto
router.get('/crearProducto',productController.crear);

//Procesamos el pedido GET con ruta //crearProducto
router.get('/editarProducto',productController.editar);


module.exports = router;