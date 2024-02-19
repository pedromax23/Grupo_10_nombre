module.exports = (sequelize, dataTypes) => {
    
    let alias = "Product"

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        price: {
            type: dataTypes.FLOAT,
            allowNull: false
        },
        img: {
            type: dataTypes.STRING(250),
            allowNull: false
        },
        description: {
            type: dataTypes.TEXT,
            allowNull: false
        },
        stock: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        alcohol_content: {
            type: dataTypes.FLOAT,
            allowNull: false
        },
        variety_id: {
            type: dataTypes.INTEGER,
            allowNull: false,
        }
    }

    let config = {
        tableName: 'products',
        timestamps: false
    }

    let Product = sequelize.define(alias, cols, config);

    Product.associate = function(models) {
        Product.belongsTo(models.Variety, {
            as: 'Variety',
            foreignKey: 'variety_id'
        })
    }

    return Product
}