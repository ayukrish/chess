import { INIT_GAME, MAKE_MOVE } from "./constant";

export class GameManager {
  public player1: WebSocket;
  public player2: WebSocket;
  private moveCount: number;

  constructor(player1: WebSocket, player2: WebSocket) {
    this.player1 = player1;
    this.player2 = player2;
    this.moveCount = 0;
    this.player1.send(JSON.stringify({
      type: INIT_GAME,
      color: 'w',
    }));
    this.player2.send(JSON.stringify({
      type: INIT_GAME,
      color: 'b',
    }));
  }

  makeMove(socket, move: {
    from: string;
    to: string;
  }) {
    if(socket === this.player1) {
      this.player2.send(JSON.stringify({
        type: MAKE_MOVE,
        move
      }));
    } else {
      this.player1.send(JSON.stringify({
        type: MAKE_MOVE,
        move
      }));
    }
    this.moveCount++;
  }
}