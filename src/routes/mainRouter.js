
const express = require("express");
const router = express.Router();

// Controller
const mainController = require("../controllers/mainController");

// Ruta pagina principal
router.get('/', mainController.index);

// Ruta Como comprar

// Ruta Contacto
router.get('/contacto', mainController.contacto);

// Ruta Politica de devolucion

// Ruta Preguntas

// Ruta Quienes somos
router.get('/quienes-somos', mainController.quienesSomos);

// Ruta Terminos y condiciones

module.exports = router;