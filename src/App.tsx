import Board from "./components/Board";
import Piece from "./components/Piece";
import Game from "./libs/Game";

export default function App() {
  Game.init();

  return (
    <div className="App">
      <Board />

      <Piece />
    </div>
  );
}
