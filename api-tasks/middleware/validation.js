// middleware/validation.js
const { body, validationResult } = require('express-validator');
exports.createTaskValidation = [
    body('title')
    .notEmpty().withMessage('El título de la tarea es obligatorio')
    .isLength({ min: 3 }).withMessage('El título debe tener al menos 3 caracteres'),
    body('completed')
    .isBoolean().withMessage('El campo "completed" debe ser un booleano')
    .optional(), // 'completed' es opcional en la creación si quieres un valor por defecto
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];
exports.updateTaskValidation = [
    body('title')
    .optional() // El título es opcional en la actualización
    .isLength({ min: 3 }).withMessage('El título debe tener al menos 3 caracteres'),
    body('completed')
    .isBoolean().withMessage('El campo "completed" debe ser un booleano')
    .optional(),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];