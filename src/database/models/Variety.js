module.exports = (sequelize, dataTypes) => {
    
    let alias = "Variety"

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
        description: {
            type: dataTypes.TEXT,
            allowNull: false
        },
        ibu: {
            type: dataTypes.FLOAT,
            allowNull: false
        }
    }

    let config = {
        tableName: 'variety',
        timestamps: false
    }

    let Variety = sequelize.define(alias, cols, config);

    Variety.associate = function(models) {
        Variety.hasMany(models.Product, {
            as: 'Product',
            foreignKey: 'variety_id'
        }) 
    }

    return Variety
}