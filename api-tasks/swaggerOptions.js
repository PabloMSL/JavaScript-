const swaggerJsdoc = require('swagger-jsdoc');

// Opciones de configuración para swagger-jsdoc
const options = {
    definition: {
        openapi: '3.0.0', // Versión de la especificación OpenAPI
        info: {
            title: 'API de Gestión de Tareas', // Título de tu API
            version: '1.0.0', // Versión de tu API
            description: 'Una API RESTful simple para gestionar tareas, construida con Express y documentada con Swagger/OpenAPI.', // Descripción de tu APIcontact: {name: 'Tu Nombre',url: 'http://tupaginaweb.com',email: 'tu.email@ejemplo.com',}
        },
        servers: [
            {
                url: 'http://localhost:3000/api', // URL base de tu API
                description: 'Servidor de Desarrollo Local',
            },
        ],
        // Aquí definiremos los componentes de seguridad y esquemas más adelante
        components: {
            securitySchemes: {
                // Esquema de seguridad JWT para proteger endpoints
                bearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT', // Indica que el token es JWT
                    description: 'Introduce el token JWT Bearer para acceder a los endpoints protegidos.'
                }
            },
            schemas: {
                // Esquemas de modelos de datos para la API
                Task: {
                    type: 'object',
                    required: ['title', 'completed'],
                    properties: {
                        id: {
                            type: 'integer',
                            description: 'ID auto-generado de la tarea',
                            readOnly: true,
                        },
                        title: {
                            type: 'string',
                            description: 'Título de la tarea',
                            minLength: 3,
                            maxLength: 100,
                        },
                        completed: {
                            type: 'boolean',
                            description: 'Estado de completado de la tarea',
                        },
                    },
                    example: { // Ejemplo de una tarea para la documentación
                        id: 1,
                        title: 'Aprender Swagger',
                        completed: false,
                    },
                },
                TaskInput: { // Esquema para la entrada de creación/actualización de tareas
                    type: 'object',
                    required: ['title', 'completed'],
                    properties: {
                        title: {
                            type: 'string',
                            description: 'Título de la tarea',
                            minLength: 3,
                            maxLength: 100,
                        },
                        completed: {
                            type: 'boolean',
                            description: 'Estado de completado de la tarea',
                        },
                    },
                    example: {
                        title: 'Crear documentación API',
                        completed: true,
                    },
                },
                Error: { // Esquema genérico para respuestas de error
                    type: 'object',
                    properties: {
                        message: {
                            type: 'string',
                            description: 'Mensaje de error',
                        },
                    },
                    example: {
                        message: 'Tarea no encontrada.',
                    },
                },
            },
        },
    },
    apis: ['./routes/*.js', './app.js'], // Archivos donde están tus comentarios JSDoc
};
const swaggerSpec = swaggerJsdoc(options);
module.exports = swaggerSpec;