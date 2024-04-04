const db = require('../../database/models')
const Product = db.Product;

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

        res.json({
            count: products.length,
            countByCategory: countByCategory,
            products: products
        })
    },

    findProduct: async (req, res) => {
        let product = await Product.findByPk(req.params.id, {
            include: 'Variety'
        })

        console.log(product)
        res.json({
            product: product
        })
    }
}

module.exports = controller;