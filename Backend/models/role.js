const db = require("../_database")
const Sequelize = require('sequelize')

const Role = db.define('role', {
    tipo: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

Role.associate = (models) => {
Role.belongsTo(models.User, {foreingKey: 'roleId'})}
//Role.sync({force:true})

module.exports = Role;
