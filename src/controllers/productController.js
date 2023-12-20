const path = require("path"); 

const fs = require("fs"); 

//Creamos el objeto literal correspondiente al recurso Producto-Capa controlador 
const productsFilePath = path.join(__dirname, '../data/products.json');

//const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


const controller = {
    index: function(req, res) {
        const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        res.render('products/productos', {products}) //Pase el objeto productos para recibir la informacion en el ejs
    },

    // Cree el metodo para mostrar el detalle del producto
    detalleProducto: function(req, res) {
        const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        // Recupere el ID que se pasa por URL
        let idProducto = parseInt(req.params.id);

        // Segun el ID de la URL busco el producto
        let productoIndex = products.findIndex(producto => producto.id === idProducto);//retorna el indice del objeto que cumple con la condicion

        // Renderizo la vista y ademas paso la informacion del producto
        res.render('products/detalleProducto', {producto: products[productoIndex]});
        
    },
    carritoCompras : (req,res)=>{

        res.render('products/carrito-de-compras');

    },
    crear: function(req, res) {
        const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        // Renderizo la vista crearProducto
        res.render('products/crearProducto');
    },
    editar: function(req, res) {
        const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        // Renderizo la vista editarProducto
        let idProducto = parseInt(req.params.id);
        let productoAEditar = products.find(producto => {
            return producto.id == idProducto
        });
        res.render('products/editarProducto', {productoAEditar});
    }
}

//Exportamos controller para requerirlo en productRouter.js
module.exports = controller;