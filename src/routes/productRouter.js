const express = require("express");
const router = express.Router();
const authMiddleware = require('../middleware/routes/authRegister.js') // Autenticador de registro Middleware
const multer = require('multer');
const path = require('path');

//Importamos el controlador de Producto
const productController = require("../controllers/productController");

// Configuración de multer

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'public/img')
    },
    filename: function(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    },
});

const upload = multer({ storage: storage });

// Ruta pagina productos
router.get('/', productController.index); //Estaría el listado del producto

// Ruta formulario para crear un producto
router.get('/crearProducto', authMiddleware, productController.crear); 
router.post('/crearProducto', authMiddleware, upload.single('imagenCerveza'), productController.crearProducto);

// Ruta formulario para editar un producto
router.get('/editarProducto/:id', authMiddleware, productController.editar);
router.put('/editarProducto/:id', authMiddleware, upload.single('imagenCerveza'), productController.editarProducto);

// Ruta para ver el carrito de compras
 router.get('/carrito-de-compras', authMiddleware, productController.carritoCompras)

// Ruta para ver el detalle de un producto
router.get('/detalle/:id', authMiddleware, productController.detalleProducto);

// Ruta para eliminar un producto 
router.delete('/delete/:id', authMiddleware, productController.eliminarProducto);

module.exports = router;