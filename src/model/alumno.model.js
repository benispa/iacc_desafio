const {Model, DataTypes} = require("sequelize");
const sequelize = require("../database/database.connect")
const Carrera = require("../model/carrera.model")
const Alumno_Carrera = require("../model/alumno_carrera.model")

class Alumno extends Model {}

Alumno.init({
    rut: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        unique: true
    },
    dv: {
        type: DataTypes.INTEGER,
        allowNull: false,     
    },
    nombres: {
        type: DataTypes.STRING
    },
    apellido_paterno: {
        type: DataTypes.STRING
    },
    apellido_materno: {
        type: DataTypes.STRING
    }
}, 
{
    sequelize, 
    modelName: "Alumno",
});

Alumno.belongsToMany(Carrera, {
    through: Alumno_Carrera,
    foreignKey: 'rut'
});

Carrera.belongsToMany(Alumno, {
    through: Alumno_Carrera,
    foreignKey: 'codigo'
});

sequelize.sync();

module.exports = Alumno;