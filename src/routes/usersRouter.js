const express = require("express");
const router = express.Router();
const authLoginMiddleware = require('../middleware/routes/authLogin.js');
const authMiddleware = require('../middleware/routes/authRegister.js');
const multer = require('../middleware/routes/multerPerfil.js');
const validacionRegister = require("../middleware/routes/validacionRegister.js")
const validacionLogin = require("../middleware/routes/validacionLogin.js")
const usersController = require("../controllers/usersController");

// Ruta formulario login
router.get('/login', authLoginMiddleware, validacionLogin, usersController.login);
router.post('/login', authLoginMiddleware, validacionLogin, usersController.loginPOST);

// Ruta formulario register
router.get('/register', authLoginMiddleware, validacionRegister, usersController.register);
router.post('/register', authLoginMiddleware, multer.single('img'), validacionRegister, usersController.registerPOST);

// Perfil del usuario
router.get('/profile', authMiddleware, usersController.perfil)
router.get('/logout', authMiddleware, usersController.deslogeo);

// Cambiar contraseña
router.get('/cambiarPassword/:id', authMiddleware, usersController.cambiarContraseña);
router.post('/cambiarPassword/:id', authMiddleware, usersController.cambiarContraseñaPOST);

// Usuario no logeado
router.get('/notLogin', authLoginMiddleware, usersController.notLogin)

module.exports = router;