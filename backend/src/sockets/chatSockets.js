module.exports = (io) => {
    io.on('connection', (socket) => {
      console.log('A user connected', socket.id);
  
      socket.on('message', (data) => {
        io.emit('message', data); // Broadcast message to all connected clients
      });
  
      socket.on('disconnect', () => {
        console.log('User disconnected');
      });
    });
  };
  