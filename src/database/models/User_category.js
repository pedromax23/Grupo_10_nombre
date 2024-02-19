module.exports = (sequelize, dataTypes) => {
    
    let alias = "User_category"

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        permission: {
            type: dataTypes.STRING(100),
            allowNull: false
        }
    }

    let config = {
        tableName: 'user_category',
        timestamps: false
    }

    let User_category = sequelize.define(alias, cols, config);

    User_category.associate = function(models) {
        User_category.hasMany(models.User, {
            as: 'User',
            foreignKey: 'category_id'
        })
    }

    return User_category
}