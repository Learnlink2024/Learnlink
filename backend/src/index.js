const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const mongoose = require('mongoose');
const chatSockets = require('./src/sockets/chatSockets');
const notificationSockets = require('./src/sockets/notificationSockets');
const connectDB = require('./config/db'); // MongoDB bağlantısı için
require('dotenv').config(); // .env dosyasından değişkenleri okumak için

chatSockets(io);
notificationSockets(io);

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// MongoDB bağlantısı
connectDB();

// Middleware (Gelen JSON verilerini işlemek için)
app.use(express.json());

// Basit bir GET endpoint
app.get('/', (req, res) => {
  res.send('LearnLink Backend is running!');
});

// Socket.IO bağlantısı
io.on('connection', (socket) => {
  console.log('A user connected');

  // Socket.IO mesajlaşma
  socket.on('message', (message) => {
    console.log('Received message: ', message);
    io.emit('message', message); // Gelen mesajı tüm kullanıcılara gönder
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

// Serve static files from the public directory
app.use(express.static('public')); // Adjust the path as necessary

// Sunucuyu başlat
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});