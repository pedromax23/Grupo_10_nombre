const express = require("express");
const router = express.Router();
const authLoginMiddleware = require('../middleware/routes/authLogin.js');
const authMiddleware = require('../middleware/routes/authRegister.js');
const multer = require('../middleware/routes/multer.js');

const usersController = require("../controllers/usersController");

// Ruta formulario login
router.get('/login', authLoginMiddleware, usersController.login);
router.post('/login', authLoginMiddleware, usersController.procesarlogin);

// Ruta formulario register
router.get('/register', authLoginMiddleware, usersController.register);
router.post('/register', authLoginMiddleware, multer.single('imagenUsuario'), usersController.procesarRegister);

// Perfil del usuario
router.get('/profile', authMiddleware, usersController.profile)
router.get('/logout', authMiddleware, usersController.logout);
router.get('/cambiarPassword/:id', authMiddleware, usersController.cambiarContraseña);
router.post('/cambiarPassword/:id', authMiddleware, usersController.actualizarPassword);

// Usuario no logeado
router.get('/notLogin', authLoginMiddleware, usersController.notLogin)

module.exports = router;