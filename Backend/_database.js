const Sequelize = require('sequelize')
const database = new Sequelize('postgres://ymkfomwy:ZBD3oR0PlRlrtsS5_M5msYNtcEEuI_c6@motty.db.elephantsql.com:5432/ymkfomwy')

database.authenticate().then(() => {
    console.log('Conectado ao banco de dados')
}).catch(err => {
    console.error('Houve um erro ao tentar conectar no banco de dados: ', err);
});
module.exports = database