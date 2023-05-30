//Dependencias
const express = require('express');
const morgan = require('morgan');
const cors = require("cors");
const swaggerUI = require("swagger-ui-express");
const docs = require('../../docs/basicInfo');

//Express
const app = express();

//Definir Rutas
const routerAlumnos = require('../router/alumno.router');
const routerCarreras = require('../router/carrera.router');
const routerAlumnoCarrera = require('../router/alumno_carrera.router');

//Middleware

app.use(express.json());
app.use(morgan('dev'));

//Routing

app.get ('/', (req, res) => {
    res.send('Testo')
});

app.use(cors());
app.use('/api-docs',swaggerUI.serve,swaggerUI.setup(docs));
app.use("/api/alumnos", routerAlumnos);
app.use("/api/carreras", routerCarreras);
app.use("/api/alumno_carrera", routerAlumnoCarrera);

app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Se encontró un error inesperado.');
});

module.exports = app;