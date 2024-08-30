const swaggerJSDoc = require('swaggerJSDoc');
const swaggerUi = require('swagger-ui-express')
const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'API de E-commerce',
            version: '1.0.0',
            description: 'documentación de la API de e-commerce para los modulos de productos y carrito',
        },
        servers: [
            {
                url: 'http://localhost:3000',
                description: 'Servidor de desarrollo'
            },
        ],
    },

    apis: ['./routes/*.js'],
};


const swaggerDocs = swaggerJSDoc(swaggerOptions);

module.exports = { swaggerUi, swaggerDocs };