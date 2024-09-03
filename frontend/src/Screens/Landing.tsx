import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();
  return (
    <div className="grid grid-cols-6 flex flex-col align-middle py-8 px-8">
      <div className="col-span-4 flex justify-center">
        <img src="./chessBoard.png" alt="Chessboard Image" height={"500px"} width={"500px"}/>
      </div>
      <div className="col-span-2 bg-slate-900 flex flex-col justify-center">
        <h1 className="py-4 text-slate-50 text-3xl">Play Chess Online</h1>
        <button
          className="py-2 px-4 btn rounded bg-lime-100 max-w-48"
          onClick={(event) => {
            event.stopPropagation();
            navigate('/game')
          }}
        >
          Play
        </button>
      </div>
    </div>
  );
}

export default Landing;
