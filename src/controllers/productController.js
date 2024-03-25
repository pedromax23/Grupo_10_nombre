const db = require('../database/models');
const { validationResult } = require('express-validator');
const Product = db.Product;
const Variety = db.Variety;

const controller = {
    listado: async function(req, res) {
        try {
            const products = await Product.findAll({
                include: ['Variety']
            });
            res.render('products/productos', {products})
        } catch(error) {
            res.send(error)
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
                const productoEditado = {
                    name: req.body.nombre,
                    img: req.file.filename,
                    description: req.body.descripcion,
                    price: req.body.precio,
                    stock: req.body.stock,
                    alcohol_content: req.body.alcohol_content,
                    variety_id: req.body.categoria
                }
                const editarProducto = await Product.update(productoEditado, {
                    where: {
                        id: req.params.id
                    }
                })
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

    eliminarProductoDELETE: async (req, res) => {
        try {
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