const db = require('../../database/models')
const{ Op } = require('sequelize');
const Product = db.Product;
const Variety = db.Variety;

const controller = {
    products: async (req, res) => {
        let countByCategory = await db.Product.findAll({
            attributes: [
              [db.sequelize.fn('COUNT', db.sequelize.col('*')), 'cantidad_productos'],
              [db.sequelize.col('Variety.name'), 'name']
            ],
            include: 'Variety',
            group: ['Variety.name']
          })
          .then(result => {
            const resultadoFinal = {};
            result.forEach(result => {
                resultadoFinal[result.dataValues.name] = result.dataValues.cantidad_productos;
            });

            return resultadoFinal;
          })
          .catch(error => {
            res.send('Error:', error);
          });

        let products = await Product.findAll({
          include: 'Variety'
        })

        products.map((elemento) => {
          elemento.img = 'http://localhost:3030/img/productos/' + elemento.img
        })

        res.json({
            count: products.length,
            countByCategory: countByCategory,
            products: products
        })
    },

    findOneProduct: async (req, res) => {
        let product = await Product.findByPk(req.params.id, {
            include: 'Variety'
        })

        res.json({
            product: product
        })
    },

    findProducts: async (req, res) => {
      try {

        const productos = await Product.findAll({
          where: {
            name: {[Op.like]: `%${req.query.s}%`}
          }
        })

        productos.map((producto) => {
          producto.img = 'http://localhost:3030/img/productos/' + producto.img
        })

        res.json({
          count: productos.length,
          productos: productos
        })

      } catch(error) {
        res.send(error)
      }
    },

    variedades: async (req, res) => {
      try {

        const variedades = await Variety.findAll();

        res.json({
          count: variedades.length,
          variedades: variedades
        })

      } catch(error) {
        res.send(error)
      }

    }
}

module.exports = controller;