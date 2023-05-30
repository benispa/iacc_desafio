const {Model, DataTypes} = require("sequelize");
const sequelize = require("../database/database.connect")

class Alumno_Carrera extends Model {}

Alumno_Carrera.init({
    rut: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    codigo: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true    
    },
    fecha_inicio: {
        type: DataTypes.DATE
    },
    fecha_final: {
        type: DataTypes.DATE
    }
}, 
{
    sequelize, 
    modelName: "Alumno_Carrera",
});

module.exports = Alumno_Carrera;