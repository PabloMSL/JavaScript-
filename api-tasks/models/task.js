const mongoose = require('mongoose');

// Definir el esquema de la tarea
const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true, // El título es obligatorio
    trim: true // Elimina espacios al principio y al final
  },
  description: {
    type: String,
    default: '', // Descripción opcional
    trim: true
  },
  status: {
    type: String,
    enum: ['pendiente', 'completada', 'en progreso'], // Los estados permitidos
    default: 'pendiente' // Estado por defecto
  },
  createdAt: {
    type: Date,
    default: Date.now // Fecha de creación
  },
  updatedAt: {
    type: Date,
    default: Date.now // Fecha de última actualización
  }
});

// Crear un modelo de Mongoose para las tareas
const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
