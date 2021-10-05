import Board from "./components/Board";
import Piece from "./components/Piece";
import GameManager from "./libs/GameManager";

export default function App() {
  GameManager.init();

  return (
    <div className="App">
      <Board />

      <Piece />
    </div>
  );
}
