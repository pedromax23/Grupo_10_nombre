//Importamos Express
const express = require("express");

//Ejecutamos método Router de Express
const router = express.Router();

//Importamos el controlador de Producto
const productController = require("../controllers/productController");

//Procesamos el pedido GET con ruta /
router.get('/', productController.index); //Estaría el listado del producto

// Detalle del producto
router.get('/:id', productController.detalleProducto);


module.exports = router;