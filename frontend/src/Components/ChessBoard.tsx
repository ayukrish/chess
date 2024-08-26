import { Color, PieceSymbol, Square } from "chess.js";

const ChessBoard = ({ board } : {
  board: ({
    square: Square;
    type: PieceSymbol;
    color: Color;
  } | null)[][];
})  => {
  console.log(board);
  return (
    <div>
      {board.map((row, i) => {
        return (
          <div key={i} className="flex">
            {row.map((square, j) => {
              return (
                <div key={j} className={`w-10 h-10 border ${(i+j)%2 === 0 ? "bg-white-100" : "bg-green-500"} justify-center flex`}>
                  {square?.type}
                </div>
              )})}
          </div>
        )
      })}
    </div>
  )
}

export default ChessBoard;