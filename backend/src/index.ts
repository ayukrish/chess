import  { WebSocketServer } from 'ws';
import { UserManager } from './UserManager';
const wss = new WebSocketServer({ port: 3008 });

const userManager = new UserManager();
wss.on('connection', function connection(socket) {
  userManager.addUser(socket);
  socket.on('disconnect', () => { userManager.removeUser(socket) })
});
