const express = require("express");
const router = express.Router();
const authLoginMiddleware = require('../middleware/routes/authLogin.js')
const authMiddleware = require('../middleware/routes/authRegister.js');
const multer = require('multer');
const path = require('path');

const usersController = require("../controllers/usersController");

// Configuración de multer

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'public/img/usuarios')
    },
    filename: function(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    },
});

const upload = multer({ storage: storage });


// Ruta formulario login
router.get('/login', authLoginMiddleware, usersController.login);
router.post('/login', authLoginMiddleware, usersController.procesarlogin);

// Ruta formulario register
router.get('/register', authLoginMiddleware, usersController.register);
router.post('/register', authLoginMiddleware, upload.single('imagenUsuario'), usersController.procesarRegister);

// Perfil del usuario
router.get('/profile', authMiddleware, usersController.profile)
router.get('/logout', authMiddleware, usersController.logout);

// Usuario no logeado
router.get('/notLogin', authLoginMiddleware, usersController.notLogin)

module.exports = router;