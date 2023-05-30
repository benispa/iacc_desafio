module.exports = {
    openapi: "3.0.3",
    info: {
        title: "Desafio IACC",
        description: "Documentación de las APIs desarrolladas",
        version: "1.0.0",
    },
    apis: [
        "..src/router/alumno.router.js", "..src/router/carrera.router.js", '..src/router/alumno_carrera.router.js', 
    ],
    servers: [
        {
            url: 'http://localhost:3000',
            description: 'Development server',
        },
    ],
};