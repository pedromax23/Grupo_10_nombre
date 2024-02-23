const path = require('path'); 

const fs = require('fs'); 

//Creamos el objeto literal correspondiente al recurso Producto-Capa controlador 
const productsFilePath = path.join(__dirname, '../data/products.json');

const db = require('../database/models');

const Product = db.Product;

const controller = {
    index: async function(req, res) {
        try {
            const products = await Product.findAll();

            res.render('main/index', {productos:products});
        } catch(error) {
            res.send(error)
        }
    }, 
    contacto: function(req, res) {
        res.render('main/contacto');
    },
    quienesSomos: function(req, res) {
        res.render('main/quienes-somos');
    }

    
}

module.exports = controller;