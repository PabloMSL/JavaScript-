// tasksController.js
let tasks = [
    { id: 1, title: 'Aprender Node.js', description: 'Estudiar Express y los conceptos de REST API',completed: true },
    { id: 2, title: 'Construir una API', description: 'Desarrollar una API de tareas con autenticación',completed: false },
    { id: 3, title: 'Desplegar en la nube', description: 'Subir la API a un servicio como Heroku o Vercel',completed: false },
];
let nextId = 4; // Para asignar IDs únicos a nuevas tareas

exports.getTaskStats = (req, res) => {
    const totalTasks = tasks.length;
    const completedTasks = tasks.filter(task => task.completed).length;
    const pendingTasks = totalTasks - completedTasks;
    res.status(200).json({
        totalTasks,
        completedTasks,
        pendingTasks
    });
};

exports.getAllTasks = (req, res) => {
    const { completed, page, limit } = req.query; // Obtener el parámetro de consulta 'completed'
    let filteredTasks = tasks;
    if (completed !== undefined) {
        // Convertir la cadena 'true'/'false' a booleano
        const isCompleted = completed === 'true';
        filteredTasks = tasks.filter(task => task.completed === isCompleted);
    }  
    const currentPage = parseInt(page) || 1; // Página actual, por defecto 1
    const tasksPerPage = parseInt(limit) || 10; // Tareas por página, por defecto 10
    const startIndex = (currentPage - 1) * tasksPerPage;
    const endIndex = startIndex + tasksPerPage;
    const paginatedTasks = filteredTasks.slice(startIndex, endIndex);
    // Opcionalmente, puedes añadir metadatos de paginación en la respuesta
    res.status(200).json({
        totalTasks: filteredTasks.length,
        totalPages: Math.ceil(filteredTasks.length / tasksPerPage),
        currentPage: currentPage,
        tasks: paginatedTasks
    });
};
exports.getTaskById = (req, res) => {
    const id = parseInt(req.params.id);
    const task = tasks.find(t => t.id === id);
    if (!task) {
        return res.status(404).json({ message: 'Tarea no encontrada.' });
    }
    res.status(200).json(task);
};
exports.createTask = (req, res) => {
    const { title, description } = req.body;
    if (!title || !description) {
        return res.status(400).json({ message: 'El título y la descripción son obligatorios.' });
    }
    const newTask = {
        id: nextId++,
        title,
        description,
        completed: false,

    };
    tasks.push(newTask);
    res.status(201).json(newTask);
};
exports.updateTask = (req, res) => {
    const id = parseInt(req.params.id);
    const { title, description, completed } = req.body;
    let taskIndex = tasks.findIndex(t => t.id === id);
    if (taskIndex === -1) {
        return res.status(404).json({ message: 'Tarea no encontrada.' });
    }
    if (!title || !description || typeof completed !== 'boolean') {
        return res.status(400).json({ message: 'El título, la descripción y el estado de completado son obligatorios.' });
    }
    tasks[taskIndex] = {
        ...tasks[taskIndex], // Mantiene propiedades existentes si no se actualizan
        title,
        description,
        completed,
    };
    res.status(200).json(tasks[taskIndex]);
};
exports.deleteTask = (req, res) => {
    const id = parseInt(req.params.id);
    const initialLength = tasks.length;
    tasks = tasks.filter(t => t.id !== id);
    if (tasks.length === initialLength) {  
        return res.status(404).json({ message: 'Tarea no encontrada.' });
    }
    res.status(204).send(); // No Content
};