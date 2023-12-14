//Importamos Express
const express = require("express");

//Ejecutamos método Router de Express
const router = express.Router();

//Importamos el controlador de Producto
const productController = require("../controllers/productController");

//Procesamos el pedido GET con ruta /
router.get('/', productController.index); //Estaría el listado del producto

// Detalle del producto
// Le añadi un /detalle para que nos deje ejecutar el /crearProducto y /editarProducto. Si no nos daba error.
router.get('/detalle/:id?', productController.detalleProducto);

//Procesamos el pedido GET con ruta /crearProducto
router.get('/crearProducto',productController.crearProducto);

//Procesamos el pedido GET con ruta /editarProducto
router.get('/editarProducto',productController.editarProducto);

module.exports = router;