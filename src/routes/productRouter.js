//Importamos Express
const express = require("express");

//Ejecutamos método Router de Express
const router = express.Router();

//Importamos el controlador de Producto
const productController = require("../controllers/productController");

//Procesamos el pedido GET con ruta /
router.get('/', productController.index); //Estaría el listado del producto

// Detalle del producto
router.get('/:id?', productController.detalleProducto);

//Procesamos el pedido GET con ruta /:id?/crearProducto
router.get('/:id?/crearProducto',productController.crear); //Ver

//Procesamos el pedido GET con ruta /:id?/editarProducto
router.get('/:id?/editarProducto',productController.editar);


module.exports = router;