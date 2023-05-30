const {Model, DataTypes} = require("sequelize");
const sequelize = require("../database/database.connect")

class Carrera extends Model {}

Carrera.init({
    codigo: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING
    }
}, 
{
    sequelize, 
    modelName: "Carrera",
});

module.exports = Carrera;