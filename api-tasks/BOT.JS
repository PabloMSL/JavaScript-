// Instalar
// npm install node-telegram-bot-api

const TelegramBot = require('node-telegram-bot-api');
const mongoose = require('mongoose'); // Para manejar la base de datos (MongoDB)
const Usuario = require('./models/Usuario'); // Asegúrate de tener tu modelo de Usuario definido

// Crea el bot usando el token del entorno
const bot = new TelegramBot(process.env.TELEGRAM_BOT_TOKEN, {
  polling: true
});

// Comandos del bot

// Comando /start
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, '¡Hola! Soy tu asistente. Escribe /ayuda para ver comandos.');
});

// Comando /ayuda
bot.onText(/\/ayuda/, (msg) => {
  const chatId = msg.chat.id;
  const ayuda = `
Comandos disponibles:
/usuarios - Ver lista de usuarios
/crear - Crear nuevo usuario
/estado - Ver estado del servidor
  `;
  bot.sendMessage(chatId, ayuda);
});

// Comando /usuarios (Ver los últimos 5 usuarios)
bot.onText(/\/usuarios/, async (msg) => {
  const chatId = msg.chat.id;
  try {
    const usuarios = await Usuario.find().limit(5); // Asegúrate de tener este modelo
    let respuesta = 'Últimos 5 usuarios:\n\n';
    usuarios.forEach(u => {
      respuesta += `• ${u.nombre} (${u.email})\n`;
    });
    bot.sendMessage(chatId, respuesta);
  } catch (error) {
    console.error(error);
    bot.sendMessage(chatId, 'Error obteniendo usuarios');
  }
});

// Comando /estado (Estado del servidor)
bot.onText(/\/estado/, (msg) => {
  const chatId = msg.chat.id;

  const uptime = process.uptime(); // Tiempo que el servidor ha estado en funcionamiento
  const memoria = process.memoryUsage(); // Uso de memoria del servidor

  const respuesta = `
Estado del servidor:

⏳ Uptime: ${formatUptime(uptime)}
💻 Memoria usada: ${(memoria.rss / 1024 / 1024).toFixed(2)} MB

  `;

  bot.sendMessage(chatId, respuesta);
});

// Función para formatear el uptime (tiempo de actividad)
function formatUptime(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const sec = Math.floor(seconds % 60);
  return `${hours}h ${minutes}m ${sec}s`;
}

// Comando /crear (Crear un nuevo usuario)
bot.onText(/\/crear/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Por favor, envíame el nombre del nuevo usuario.');

  // Escuchar por el nombre del usuario
  bot.on('message', async (msg) => {
    if (msg.chat.id === chatId && msg.text && msg.text !== '/crear') {
      const nombre = msg.text; // El nombre que el usuario envía

      // Solicitar el email
      bot.sendMessage(chatId, 'Ahora, por favor, envíame el email del usuario.');

      bot.on('message', async (msgEmail) => {
        if (msgEmail.chat.id === chatId && msgEmail.text && msgEmail.text !== '/crear') {
          const email = msgEmail.text; // El email del usuario

          // Guardar el nuevo usuario en la base de datos
          const nuevoUsuario = new Usuario({ nombre, email });
          try {
            await nuevoUsuario.save();
            bot.sendMessage(chatId, `Nuevo usuario creado:\n\nNombre: ${nombre}\nEmail: ${email}`);
          } catch (error) {
            console.error(error);
            bot.sendMessage(chatId, 'Hubo un error al crear el usuario');
          }
        }
      });
    }
  });
});

