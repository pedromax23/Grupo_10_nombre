const path = require("path"); 

const fs = require("fs"); 

//Creamos el objeto literal correspondiente al recurso Producto-Capa controlador 
const productsFilePath = path.join(__dirname, '../data/products.json');

const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


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
        // Renderizo la vista crearProducto
        res.render('products/crearProducto');
    },
    crearProducto: function(req, res) {
        // traer const de productos y transformarlo en array
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
    editar: function(req, res) {
        const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        // Renderizo la vista editarProducto
        let idProducto = parseInt(req.params.id);
        let productoAEditar = products.find(producto => {
            return producto.id == idProducto
        });
        res.render('products/editarProducto', {productoAEditar});
    },
    editarProducto: function(req, res) {
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
    
    eliminarProducto: (req, res) => {

		let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
		

		products= products.filter(product=>{
			
			return product.id!= req.params.id
		})
/* 
recorre el array la pate de id y quiero que eso me devuelva lo que sea diferente a lo que esta en la ruta parametrizada req.params.id por lo que me dara una lista sin los eliminados  */

		fs.writeFileSync(productsFilePath, JSON.stringify(products,null, " "));
		/* se sobreescribe el archivo JSON */

		res.redirect("/productos");
		/* una vez elimiando redirecciono al usuario a la pagina de inicio  */
	
	},
    carritoCompras: (req, res) => {
    // traer const de productos y transformarlo en array
    const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
    res.render('products/carrito-de-compras', {productos: products});

    }

}

//Exportamos controller para requerirlo en productRouter.js
module.exports = controller;