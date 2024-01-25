const express = require("express");
const router = express.Router();

const usersController = require("../controllers/usersController");

// Ruta formulario login
router.get('/login', usersController.login);
router.post('/login', usersController.procesarlogin);

// Ruta formulario register
router.get('/register', usersController.register);
router.post('/register', usersController.procesarRegister);

module.exports = router;