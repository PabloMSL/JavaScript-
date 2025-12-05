// 1. Importar Módulos y dependencias
const express = require('express'); // El framework web principal para Node.js
const cors = require('cors'); // Middleware para habilitar Cross-Origin Resource Sharing (CORS)
const helmet = require('helmet'); // Middleware para configurar cabeceras HTTP de seguridad
require('dotenv').config(); // Carga las variables de entorno desde el archivo .env
const customLogger = require('./middleware/logger'); // Importar el logger
const swaggerUi = require('swagger-ui-express'); // Importa swagger-ui-express
const swaggerSpec = require('./swaggerOptions'); // Importa tu configuración de Swagger
const Task = require('./models/task'); // Asegúrate de que la ruta sea correcta
const mongoose = require('mongoose');
const uri = process.env.MONGO_URI;

// Importar las rutas específicas de nuestra API de tareas
const tasksRoutes = require('./routes/tasks');

// 2. Inicializar la Aplicación Express
const app = express();

// 3. Configurar el Puerto del Servidor
// Utiliza el puerto definido en el archivo .env (por ejemplo, PORT=3000)
// Si no se encuentra la variable de entorno, usa el puerto 3000 por defecto.


// 4. Configurar Middleware Global
// Habilitar CORS: Permite solicitudes HTTP de origen cruzado.
// Esto es fundamental para que, por ejemplo, una aplicación frontend alojada en otro dominio
// pueda comunicarse con nuestra API.
app.use(cors());

// Configurar Helmet: Añade cabeceras HTTP de seguridad para proteger la aplicación
// contra vulnerabilidades web conocidas (como XSS, inyección de scripts, etc.).
app.use(helmet());

// Middleware para parsear cuerpos de solicitud JSON:
// Habilita a la aplicación para leer datos en formato JSON enviados en el cuerpo
// de las solicitudes (especialmente POST y PUT).
app.use(express.json());
app.use(customLogger);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
// 5. Definir Rutas de la API
// Monta el enrutador de tareas en la ruta base "/api/tasks".
// Esto significa que todas las rutas definidas en tasksRoutes (por ejemplo, "/", "/:id")
// serán accesibles bajo este prefijo (por ejemplo, "/api/tasks/", "/api/tasks/:id").
app.use('/api/tasks', tasksRoutes);

// Conectar con la base de datos MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Conexión a la base de datos exitosa'))
  .catch((error) => console.error('Error al conectar con la base de datos:', error));

if (!uri) {
  console.error('MONGO_URI no está definida en el archivo .env');
  process.exit(1); // Detiene la ejecución si no se ha encontrado la URI
}

// Ruta de ejemplo para crear una tarea
app.post('/tasks', async (req, res) => {
  try {
    const { title, description, status } = req.body;

    const newTask = new Task({
      title,
      description,
      status
    });

    await newTask.save();
    res.status(201).json(newTask);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al crear la tarea' });
  }
});

// Ruta de ejemplo para obtener todas las tareas
app.get('/tasks', async (req, res) => {
  try {
    const tasks = await Task.find(); // Obtiene todas las tareas
    res.status(200).json(tasks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener las tareas' });
  }
});

// 6. Iniciar el Servidor
// La aplicación Express comienza a escuchar en el puerto configurado.
// Cuando el servidor está listo, se ejecuta la función de callback.
if (require.main === module){
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {   
        console.log(`Servidor escuchando en el puerto ${PORT}`);
        console.log(`Accede a la API en: http://localhost:${PORT}/api/tasks`);
    });
}
module.exports = app;