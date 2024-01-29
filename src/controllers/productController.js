const path = require("path"); 
const fs = require("fs"); 

const productsFilePath = path.join(__dirname, '../data/products.json');

const controller = {
    listado: function(req, res) {
        const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

        res.render('products/productos', {products})
    },
    detalleProducto: function(req, res) {
        const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

        let productoIndex = products.findIndex(producto => producto.id === (parseInt(req.params.id)));//retorna el indice del objeto que cumple con la condicion

        res.render('products/detalleProducto', {producto: products[productoIndex]});
    },
    carritoCompras : (req,res)=>{
        res.render('products/carrito-de-compras');
    },
    crearProducto: function(req, res) {
        res.render('products/crearProducto');
    },
    crearProductoPOST: function(req, res) {
        const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

        // crear nuevo producto y guardarlo en un objeto literal
        const nuevoProducto = {
            id: products[products.length - 1].id + 1,
            nombre: req.body.nombre,
            img: req.file.filename,
            descripcion: req.body.descripcion,
            precio: req.body.precio,
            categoria: req.body.categoria
        }

        // hacer el push para agregar productos
        products.push(nuevoProducto);

        // transformar al JSON
        fs.writeFileSync(productsFilePath, JSON.stringify(products, null, " "), 'utf-8');

        // mostrar la vista al usuario redirigiendo
        res.redirect('/productos');
    },
    editarProducto: function(req, res) {
        const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        // Renderizo la vista editarProducto
        let productoAEditar = products.find(producto => {
            return producto.id == (parseInt(req.params.id))
        });
        res.render('products/editarProducto', {productoAEditar});
    },
    editarProductoPOST: function(req, res) {
        // traer const de productos y transformarlo en array
        let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

        // filtar por req.params.id con find
        let idProducto = parseInt(req.params.id); // recuperamos id de la url y lo guardamos en idProducto
        let productoAEditar = products.find(producto => {
            return producto.id == idProducto
        });
        // sobreescribir el producto en un nuevo objeto literal
        productoAEditar = {
            id: productoAEditar.id,
            nombre: req.body.nombre,
            img: req.file ? req.file.filename : productoAEditar.img, // if ternario para ver si se subio foto, sino uso la que estaba
            descripcion: req.body.descripcion,
            precio: req.body.precio,
            categoria: req.body.categoria
        }
        
        let indice = products.findIndex(product => {
            return product.id == idProducto
        }); // buscamos la posicion del objeto en el array

        products[indice] = productoAEditar;

        // transformar al JSON
        fs.writeFileSync(productsFilePath, JSON.stringify(products, null, " "), 'utf-8');

        // mostrar la vista al usuario redirigiendo
        res.redirect('/productos/detalle/' + idProducto); // de esta forma redireccionamos a la ruta /productos/detalle / el idProducto que editamos
    },
    eliminarProductoDELETE: (req, res) => {
		let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

		products= products.filter(product=>{
			return product.id!= req.params.id
		})

		fs.writeFileSync(productsFilePath, JSON.stringify(products,null, " "));

		res.redirect("/productos");

	}
}

module.exports = controller;