import { Chess } from "chess.js";
import { useState } from "react";
import ChessBoard from './ChessBoard';
const Game = () => {
  const [chess] = useState(new Chess());
  const [board, setBoard] = useState(chess.board());
  return (
    <div className="grid grid-cols-6 flex flex-col align-middle py-8 px-8">
      <div className="col-span-4 flex justify-center">
        <ChessBoard board={board} setBoard={setBoard} chess={chess} />
      </div>
      <div className="col-span-2 bg-slate-900 flex flex-col justify-center">
        <h1 className="py-4 text-slate-50 text-3xl">Play Chess Online</h1>
        <button className="py-2 px-4 btn rounded bg-lime-100 max-w-48">Play</button>
      </div>
    </div>
  )
}

export default Game;