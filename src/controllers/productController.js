const db = require('../database/models');
const fs = require('fs');
const path = require('path');
const { validationResult } = require('express-validator');
const Product = db.Product;
const Variety = db.Variety;

const controller = {
    listado: async function(req, res) {
        try {
            let products;
            let varietys = await Variety.findAll();
            
            if (req.query.tipo) {
                // Si el parámetro 'tipo' está presente en los parámetros de consulta
                products = await Product.findAll({
                    where: { variety_id: req.query.tipo }, // Filtrar por el ID de la variedad
                    include: ['Variety']
                });
            } else {
                // Si no se proporciona el parámetro 'tipo', obtener todos los productos
                products = await Product.findAll({
                    include: ['Variety']
                });
            }
            
            res.render('products/productos', { products: products, varietys: varietys });
        } catch(error) {
            res.send(error);
        }
    },
    
    detalleProducto: async function(req, res) {
        try {
            const product = await Product.findByPk(req.params.id, {
                include: ['Variety']
            })
            res.render('products/detalleProducto', {producto: product});
        } catch(error) {
            res.send(error)
        }
    },

    carritoCompras : (req,res)=>{
        res.render('products/carrito-de-compras');
    },

    crearProducto: async function(req, res) {
        try {

            

            const variedades = await Variety.findAll()
            res.render('products/crearProducto', {variedades: variedades});
        } catch(error) {
            res.send(error)
        }
    },

    crearProductoPOST: async function(req, res) {
        try {
            let validacionErrores = validationResult(req);
            if(!validacionErrores.errors.length > 0) {
                
                const nuevoProducto = {
                    name: req.body.nombre,
                    img: req.file.filename,
                    description: req.body.descripcion,
                    price: req.body.precio,
                    stock: req.body.stock,
                    alcohol_content: req.body.alcohol_content,
                    variety_id: req.body.categoriaCerveza
                }
                const crearProducto = await Product.create(nuevoProducto)
                res.redirect('/productos');

            } else {
                
                const variedades = await Variety.findAll()
                res.render('products/crearProducto', {errors: validacionErrores.mapped(), oldData: req.body, variedades: variedades})

            }
        } catch(error) {
            res.send(error);
        }
    },

    editarProducto: async function(req, res) {
        try {
            const variedades = await Variety.findAll();

            const product = await Product.findByPk(req.params.id, {
                include: ['Variety']
            })
            res.render('products/editarProducto', {productoAEditar: product, variedades: variedades});
        } catch(error) {
            res.send(error)
        }
    },

    editarProductoPOST: async function(req, res) {
        try {
            let validacionErrores = validationResult(req);
            if(!validacionErrores.errors.length > 0) {

                const productoAEditar = await Product.findByPk(req.params.id)

                productoAEditar.name = req.body.nombre
                productoAEditar.description = req.body.descripcion
                productoAEditar.price = req.body.precio
                productoAEditar.stock = req.body.stock
                productoAEditar.alcohol_content = req.body.alcohol_content
                productoAEditar.variety_id = req.body.categoria

                if(req.file) {

                    if (productoAEditar.img) {
                        // Obtener la ruta completa del archivo de imagen anterior
                        const imagePath = path.join(__dirname, '..', '..', 'public', 'img', 'productos', productoAEditar.img);
                        // Eliminar el archivo de imagen anterior
                        fs.unlinkSync(imagePath);
                    }

                    productoAEditar.img = req.file.filename;
                }

                await productoAEditar.save()

                res.redirect('/productos/detalle/' + req.params.id);
            } else {
                const variedades = await Variety.findAll();

                const product = await Product.findByPk(req.params.id, {
                    include: ['Variety']
                })
                res.render('products/editarProducto', {errors: validacionErrores.mapped(), productoAEditar: product, variedades: variedades});
            }
        } catch(error) {
            res.send(error)
        }
    },

    eliminarProducto: async (req, res) => {

        const productoAEliminar = await Product.findByPk(req.params.id)

        res.render('products/eliminar', {producto: productoAEliminar})
    },

    eliminarProductoDELETE: async (req, res) => {
        try {

            const productoAEliminar = await Product.findByPk(req.params.id)

            if (productoAEliminar.img) {
                const imagePath = path.join(__dirname, '..', '..', 'public', 'img', 'productos', productoAEliminar.img);
                fs.unlinkSync(imagePath);
            }

            const eliminarProducto = await Product.destroy({
                where: {
                    id: req.params.id
                }
            })

            res.redirect("/productos");
        } catch(error) {
            res.send(error)
        }
	}
}

module.exports = controller;