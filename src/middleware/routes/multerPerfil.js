const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'public/img/usuarios')
    },
    filename: function(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    },
});

// Función de filtro para aceptar solo ciertos tipos de archivos
const fileFilter = function(req, file, cb) {
    const allowedExtensions = ['.jpg', '.png', '.jpeg', '.gif'];
    const extname = path.extname(file.originalname).toLowerCase();
    if (allowedExtensions.includes(extname)) {
        // Acepta el archivo
        cb(null, true);
    } else {
        // Rechaza el archivo
        cb(new Error('El archivo debe ser una imagen con extensión .jpg, .png, .jpeg o .gif'));
    }
};

const upload = multer({ 
    storage: storage,
    fileFilter: fileFilter 
});

module.exports = upload;