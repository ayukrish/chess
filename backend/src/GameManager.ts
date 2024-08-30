import { MAKE_MOVE } from "./constant";

export class GameManager {
  public player1: WebSocket;
  public player2: WebSocket;
  private moveCount: number;

  constructor(player1: WebSocket, player2: WebSocket) {
    this.player1 = player1;
    this.player2 = player2;
    this.moveCount = 0;
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