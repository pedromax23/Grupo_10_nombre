const express = require("express");
const router = express.Router();
const authLoginMiddleware = require('../middleware/routes/authLogin.js')
const authMiddleware = require('../middleware/routes/authRegister.js');

const usersController = require("../controllers/usersController");

// Ruta formulario login
router.get('/login', authLoginMiddleware, usersController.login);
router.post('/login', authLoginMiddleware, usersController.procesarlogin);

// Ruta formulario register
router.get('/register', authLoginMiddleware, usersController.register);
router.post('/register', authLoginMiddleware, usersController.procesarRegister);

// Perfil del usuario
router.get('/profile', authMiddleware, usersController.profile)
router.get('/logout', authMiddleware, usersController.logout);

// Usuario no logeado
router.get('/notLogin', authLoginMiddleware, usersController.notLogin)

module.exports = router;