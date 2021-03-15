const db = require("../_database")
const Sequelize = require('sequelize')
const bcrypt = require('bcrypt-nodejs')

const User = db.define('users', {
    id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    telefone: {
        type: Sequelize.STRING(11),
        allowNull: false
    },
    email: {
        type: Sequelize.STRING(100),
        allowNull: false,
        unique: {
            args: true,
            msg: 'Esse email já está cadastrado!'
        },
        validate: {
          isEmail: {
            msg: 'Não é um email'
          }
        }
    },
    idade: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    peso: {
        type: Sequelize.INTEGER
    },
    etnia: {
        type: Sequelize.ENUM('indigena', 'branco', 'negro')
    },
    roleId: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        defaultValue: "123456"
    }

});


User.associate = (models) => {
User.hasMany(models.Address, {onDelete: "cascade"})
User.hasMany(models.Role, {onDelete: "cascade"})}
//User.sync({force:true})

module.exports = User;