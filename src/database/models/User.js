module.exports = (sequelize, dataTypes) => {
    
    let alias = "User"

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
        last_name: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        user_name: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        email: {
            type: dataTypes.STRING(250),
            allowNull: false
        },
        password: {
            type: dataTypes.STRING(250),
            allowNull: false
        },
        birth_date: {
            type: dataTypes.DATE,
            allowNull: false
        },
        address: {
            type: dataTypes.STRING(250),
            allowNull: false
        },
        comment: {
            type: dataTypes.STRING(250),
            allowNull: false
        },
        img: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        category_id: {
            type: dataTypes.INTEGER,
            allowNull: true
        }
    }

    let config = {
        tableName: 'users',
        timestamps: false
    }

    let User = sequelize.define(alias, cols, config);

    User.associate = function(models) {
        User.belongsTo(models.User_category, {
            as: 'User_category',
            foreignKey: 'category_id'
        })
    }

    return User
}