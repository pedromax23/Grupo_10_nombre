const express = require("express");
const router = express.Router();
const authMiddleware = require('../middleware/routes/authRegister.js'); // Autenticador de registro Middleware
const multer = require('../middleware/routes/multerProducto.js');
const validacionCreacion = require('../middleware/routes/validacionCreacionProductos.js');
const validacionEdicion = require('../middleware/routes/validacionEditarProducto.js')
const validacionUsuarioCategoria = require('../middleware/routes/validacionCategoriaUsuario.js')

//Importamos el controlador de Producto
const productController = require("../controllers/productController");

// Ruta pagina productos
router.get('/', productController.listado);

// Ruta para ver el detalle de un producto
router.get('/detalle/:id', authMiddleware, productController.detalleProducto);

// Ruta para ver el carrito de compras
router.get('/carrito-de-compras', authMiddleware, productController.carritoCompras)

 // Ruta formulario para crear un producto
router.get('/crearProducto', authMiddleware, validacionCreacion, validacionUsuarioCategoria, productController.crearProducto); 
router.post('/crearProducto', authMiddleware, multer.single('imagenCerveza'), validacionCreacion, validacionUsuarioCategoria, productController.crearProductoPOST);

// Ruta formulario para editar un producto
router.get('/editarProducto/:id', authMiddleware, validacionEdicion, validacionUsuarioCategoria, productController.editarProducto);
router.put('/editarProducto/:id', authMiddleware, multer.single('imagenCerveza'), validacionEdicion, validacionUsuarioCategoria, productController.editarProductoPOST);

// Ruta para eliminar un producto 
router.delete('/delete/:id', authMiddleware, validacionUsuarioCategoria, productController.eliminarProductoDELETE);

module.exports = router;