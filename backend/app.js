// backend/app.js

/*const express = require('express');
const session = require('express-session');
const { Server } = require('socket.io');
const http = require('http');
require('dotenv').config();*/

// Inicialización
/*const app = express();
const server = http.createServer(app);
const io = new Server(server);*/

// Middleware
//app.use(express.json());
//app.use(session({ /* Configuración de sesión */ }));

// Conexión WebSocket
/*io.on('connection', (socket) => {
    console.log('Usuario conectado:', socket.id);
    socket.on('message', (msg) => io.emit('message', msg)); // Ejemplo de chat en tiempo real
});

// Ruta de ejemplo
app.get('/', (req, res) => {
    res.send("Bienvenido a la Red Social!");
});

// Iniciar el servidor
const PORT = process.env.PORT || 4000;
server.listen(PORT, () => console.log(`Servidor en puerto ${PORT}`));*/


const express = require('express');
const socketIO = require('socket.io');
const http = require('http');
const knex = require('knex')(require('./knexfile').development);

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(express.json());

// Configuración de WebSocket
io.on('connection', (socket) => {
  console.log('Nuevo cliente conectado');
  socket.on('disconnect', () => {
    console.log('Cliente desconectado');
  });
});

app.get('/', (req, res) => {
  res.send('Red Social Backend');
});

server.listen(3001, () => {
  console.log('Servidor backend corriendo en el puerto 3001');
});
