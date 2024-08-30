import { GameManager } from './GameManager';
import { INIT_GAME, MAKE_MOVE } from './constant';

export class UserManager {
  private users: WebSocket[];
  private pendingUser: WebSocket | null;
  private games: GameManager[];

  constructor() {
    this.users = [];
    this.pendingUser = null;
    this.games = [];
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
      const message = JSON.parse(data);
      if(message.type === INIT_GAME) {
        if(this.pendingUser) {
          const game = new GameManager(this.pendingUser, socket);
          this.games.push(game);
        } else {
          this.pendingUser = socket;
        }
      }
      if(message.type === MAKE_MOVE) {
         const game = this.games.find(({player1, player2 }) => player1 === socket || player2 === socket)
         game.makeMove(socket, message.move)
      }
    };
  }
}
