import { GameManager } from './GameManager';

export class UserManager {
  private games: [];
  private users: WebSocket[];

  constructor() {
    this.games = [];
    this.users = [];
  }

  addUser(socket) {
    this.users.push(socket);
    this.addGame(socket);
  }

  removeUser(socket) {
    this.users = this.users.filter(user => user !== socket);
  }

  private addGame(socket: WebSocket) {

  }
}
