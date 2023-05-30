//Dependencias
const express = require('express');
const morgan = require('morgan');
const cors = require("cors");
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

//Express
const app = express();

//Swagger
const swaggerDefinition = {
    info: {
        title: 'REST API for my App', // Title of the documentation
        version: '1.0.0', // Version of the app
        description: 'This is the REST API for my product', // short description of the app
    },
    host: 'localhost:3000', // the host or url of the app
    basePath: '/api', // the basepath of your endpoint
};

const options = {
    swaggerDefinition,
    apis: ['./docs/**/*.yaml'],
};

const swaggerSpec = swaggerJSDoc(options);

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

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
app.use("/api/alumnos", routerAlumnos);
app.use("/api/carreras", routerCarreras);
app.use("/api/alumno_carrera", routerAlumnoCarrera);

app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Se encontró un error inesperado.');
});

module.exports = app;