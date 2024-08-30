import { BLACK, Chess, Color, PieceSymbol, Square, WHITE } from "chess.js";
import { useState } from "react";
import { MAKE_MOVE } from "../constant";
import { TColor } from '../commonInterface'


type TBoard = ({
  square: Square;
  type: PieceSymbol;
  color: Color;
} | null)[][];

const ChessBoard = ({ board, setBoard, chess, socket, color } : {
  chess: Chess;
  setBoard:  React.Dispatch<React.SetStateAction<TBoard>>;
  board: TBoard;
  socket: WebSocket | null;
  color: TColor
})  => {
  const [from, setFrom] = useState<Square | null>(null);
  console.log(color);
  return (
    <div>
      {board.map((row, i) => {
        return (
          <div key={i} className="flex">
            {row.map((square, j) => {
              const squareRepresentation = String.fromCharCode(97 + (j % 8)) + "" + (8 - i) as Square;
              return (
                <div
                  onClick={() => {
                    if(from) {
                      setFrom(null);
                      chess.move({
                        from,
                        to: squareRepresentation
                      });
                      setBoard(chess.board());
                      if(socket) {
                        socket.send(JSON.stringify({
                          type: MAKE_MOVE,
                          move: {
                            from,
                            to: squareRepresentation
                          }
                        }))
                      }
                    } else {
                      if(square?.color === color) {
                        setFrom(squareRepresentation);
                      }
                    }
                  }}
                  key={j}
                  className={`w-16 h-16 border p-2 ${(i+j)%2 === 0 ? "bg-green-200" : "bg-green-500"} justify-center flex`}
                >
                  {square && (
                    <img
                      src={square.color === WHITE  ? `./${square?.type}-${WHITE}.png` :  `./${square?.type}-${BLACK}.png`}
                      alt={`${square?.type}-${square.color}`}
                    />
                  )}
                </div>
              )})}
          </div>
        )})}
    </div>
  )
}

export default ChessBoard;