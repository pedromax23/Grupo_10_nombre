const path = require('path'); 

const fs = require('fs'); 

//Creamos el objeto literal correspondiente al recurso Producto-Capa controlador 
const productsFilePath = path.join(__dirname, '../data/products.json');

const controller = {
    index: function(req, res) {

        const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        res.render('main/index', {productos:products});
    }, 
    contacto: function(req, res) {
        res.render('main/contacto');
    },
    quienesSomos: function(req, res) {
        res.render('main/quienes-somos');
    }

    
}

module.exports = controller;