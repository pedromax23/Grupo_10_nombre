const express = require("express");
const router = express.Router();

//Importamos el controlador de Producto
const productController = require("../controllers/productController");

// Ruta pagina productos
router.get('/', productController.index); //Estaría el listado del producto

// Ruta formulario para crear un producto
router.get('/crearProducto',productController.crear); 
// router.post('/crearProducto', productController.crearProducto)

// Ruta formulario para editar un producto
router.get('/editarProducto',productController.editar);
// router.put('/editarProducto', productController.editarProducto)

// Ruta para ver el carrito de compras
router.get('/carrito-de-compras', productController.carritoCompras)

// Ruta para ver el detalle de un producto
router.get('/:id?', productController.detalleProducto);


module.exports = router;