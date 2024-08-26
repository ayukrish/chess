import { GameManager } from './GameManager';

export class UserManager {
  private users: WebSocket[];
  private pendingUser: WebSocket | null;

  constructor() {
    this.users = [];
    this.pendingUser = null;
  }

  addUser(socket) {
    this.users.push(socket);
    this.addGame(socket);
  }

  removeUser(socket) {
    this.users = this.users.filter(user => user !== socket);
  }

  private addGame(socket: WebSocket) {
    socket.onmessage = ({ data }) => {
      console.log(data);
    };
    const game  = new GameManager(socket);
  }
}
