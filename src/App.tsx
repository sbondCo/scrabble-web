import Board from "./components/Board";
import Piece from "./components/Piece";
import Home from "./views/Home";
import Game from "./libs/Game";

export default function App() {
  Game.init();

  return (
    <div className="App">
      <Home />

      {/* <Board />

      <Piece /> */}
    </div>
  );
}
