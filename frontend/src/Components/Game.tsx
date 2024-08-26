import { Chess } from "chess.js";
import { useState } from "react";
import ChessBoard from './ChessBoard';
const Game = () => {
  const [game] = useState(new Chess());
  const [board] = useState(game.board());
  return (
    <ChessBoard board={board} />
  )
}

export default Game;