import Game from "./../libs/Game";

export default function Home() {
  // mockup for now to get functionality working first
  return (
    <div>
      <span className="text-xl">Scrabble</span>

      <br />
      <br />

      <input type="text" placeholder="name" />

      <br />
      <br />

      <button onClick={Game.new}>Find Game</button>
    </div>
  );
}
