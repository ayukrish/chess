import { Chess, Color, PieceSymbol, Square } from "chess.js";
import { useState } from "react";

type TBoard = ({
  square: Square;
  type: PieceSymbol;
  color: Color;
} | null)[][];

const ChessBoard = ({ board, setBoard, chess } : {
  chess: Chess;
  setBoard:  React.Dispatch<React.SetStateAction<TBoard>>;
  board: TBoard;
})  => {
  const [from, setFrom] = useState<Square | null>(null);
  return (
    <div className="flex flex-col">
      {board.map((row, i) => {
        return (
          <div key={i} className="flex">
            {row.map((square, j) => {
              const squareRepresentation = String.fromCharCode(97 + (j % 8)) + "" + (8 - i) as Square;
              return (
                <div
                  onClick={() => {
                    if(!from) {
                      setFrom(squareRepresentation)
                    } else {
                      setFrom(null);
                      chess.move({
                        from,
                        to: squareRepresentation
                      });
                      setBoard(chess.board());
                    }
                  }}
                  key={j}
                  className={`w-12 h-12 border ${(i+j)%2 === 0 ? "bg-slate-50" : "bg-green-500"} justify-center flex`}
                >
                  {square?.type}
                </div>
              )})}
          </div>
        )})}
    </div>
  )
}

export default ChessBoard;