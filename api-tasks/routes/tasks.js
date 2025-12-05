// Importa el módulo 'express', que es el framework para construir aplicaciones web.
const express = require('express');
// Importa el controlador de tareas que contiene las funciones lógicas para cada ruta.
const tasksController = require('../controllers/tasksController');
const { createTaskValidation, updateTaskValidation } = require('../middleware/validation'); //Importar validadores
const { body, validationResult } = require('express-validator');

let tasks = []; // Array en memoria para simular la base de datos

/**
* @swagger
* /tasks:
*  get:
*   summary: Obtiene todas las tareas
*   tags: [Tasks]
*   responses:
*    200:
*     description: Lista de todas las tareas
*     content:
*      application/json:
*       schema:
*        type: array
*        items:
*          $ref: '#/components/schemas/Task' # Referencia al esquema Task definido en swaggerOptions.js
*    500:
*     description: Error del servidor
*     content:
*      application/json:
*      schema:
*        $ref: '#/components/schemas/Error'
*/

// Crea una nueva instancia de Express Router.
// express.Router() permite agrupar rutas relacionadas y aplicar middleware a ese grupo.
const router = express.Router();

router.get('/stats', tasksController.getTaskStats);
// Define la ruta para obtener todas las tareas.
// Cuando se recibe una solicitud GET en '/', se ejecuta la función getAllTasks del controlador.
router.get('/', tasksController.getAllTasks);

// Define la ruta para obtener una tarea específica por su ID.
// El ':id' es un parámetro de ruta que Express extrae y pasa al controlador.
// Cuando se recibe una solicitud GET en '/:id', se ejecuta la función getTaskById.
router.get('/:id', tasksController.getTaskById);

/**
* @swagger
* /tasks:
*  post:
*   summary: Crea una nueva tarea
*   tags: [Tasks]
*   security:
*    - bearerAuth: [] # Indica que este endpoint requiere autenticación JWT
*   requestBody:
*    required: true
*    content:
*     application/json:
*      schema:
*       $ref: '#/components/schemas/TaskInput' # Referencia al esquema TaskInput
*   responses:
*    201:
*     description: Tarea creada exitosamente
*     content:
*      application/json:
*       schema:
*        $ref: '#/components/schemas/Task'
*     400:
*      description: Datos de entrada inválidos
*      content:
*       application/json:
*        schema:
*         type: object
*         properties:
*          errors:
*           type: array
*           items:
*            type: object
*            properties:
*             msg:
*              type: string
*             param:
*              type: string
*             location:
*              type: string
*         example:
*          errors:
*           - msg: "El título debe tener al menos 3 caracteres."
*           param: "title"
*           location: "body"
*     500:
*      description: Error del servidor
*      content:
*       application/json:
*        schema:
*         $ref: '#/components/schemas/Error'
*/

// Define la ruta para crear una nueva tarea.
// Cuando se recibe una solicitud POST en '/', se ejecuta la función createTask.
router.post(
    '/',
    [
        body('title')
        .isLength({ min: 3, max: 100 })
        .withMessage('El título debe tener entre 3 y 100 caracteres.'),
        body('completed').isBoolean().withMessage('El campo "completed" debe ser un booleano.'),
    ],
    (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const { title, completed } = req.body;
        const newTask = { id: tasks.length + 1, title, completed };
        tasks.push(newTask);
        res.status(201).json(newTask);
    }
);

// Define la ruta para actualizar una tarea existente por su ID.
// Cuando se recibe una solicitud PUT en '/:id', se ejecuta la función updateTask.
router.put('/:id', updateTaskValidation, tasksController.updateTask); // Usar validación en PUT

// Define la ruta para eliminar una tarea existente por su ID.
// Cuando se recibe una solicitud DELETE en '/:id', se ejecuta la función deleteTask.
router.delete('/:id', tasksController.deleteTask);

// Exporta el router para que pueda ser utilizado e importado en el archivo principal de la app(app.js).
module.exports = router;