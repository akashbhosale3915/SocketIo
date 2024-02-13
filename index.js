import { createServer } from 'http';
import { Server } from 'socket.io';

const httpServer = createServer();
const io = new Server(httpServer, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
});

io.on('connection', (socket) => {
  socket.on('message', (msg) => {
    io.emit('message', JSON.stringify({ id: socket.id, msg }));
  });
});

httpServer.listen(3000, () => {
  console.log('Server listening at port 3000');
});
