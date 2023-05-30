const {Sequelize} = require("sequelize");

const sequelize = new Sequelize(process.env.BDD, process.env.USER, process.env.PASSWORD, {
    host: process.env.HOST_BDD,
    dialect: process.env.DIALECT,
    port: process.env.PORT_BDD,
}); 

module.exports = sequelize;