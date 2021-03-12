const db = require("../_database")
const Sequelize = require('sequelize')

const Address = db.define('address', {
    rua: {
        type: Sequelize.STRING,
        allowNull: false
    },
    numero: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    complemento: {
        type: Sequelize.STRING,
    },
    cep: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    cidade: {
        type: Sequelize.STRING
    },
    estado: {
        type: Sequelize.STRING
    },
    idUser: {
        type: Sequelize.INTEGER,
        allowNull: false
    }

});

Address.associate = function({ User }) {
    Address.belongsTo(User);
  };

//Address.sync({force:true})

module.exports = Address;
