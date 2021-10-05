import React from "react";
import { useEffect } from "react";

export class top_coords {
  public static top_x = 0;
  public static top_y = 0;
  public static width = 0;
  public static height = 0;
}

enum BoardTile {
  Normal = 0,
  TrippleWordScore = 1,
  DoubleWordScore = 2,
  TrippleLetterScore = 4,
  DoubleLetterScore = 3,
  Middle = 5
}

export default function Board() {
  const bp = BoardTile;
  const board = [
    [
      bp.TrippleWordScore,
      bp.Normal,
      bp.Normal,
      bp.DoubleLetterScore,
      bp.Normal,
      bp.Normal,
      bp.Normal,
      bp.TrippleWordScore,
      bp.Normal,
      bp.Normal,
      bp.Normal,
      bp.DoubleLetterScore,
      bp.Normal,
      bp.Normal,
      bp.TrippleWordScore
    ],
    [
      bp.Normal,
      bp.DoubleWordScore,
      bp.Normal,
      bp.Normal,
      bp.Normal,
      bp.TrippleLetterScore,
      bp.Normal,
      bp.Normal,
      bp.Normal,
      bp.TrippleLetterScore,
      bp.Normal,
      bp.Normal,
      bp.Normal,
      bp.DoubleWordScore,
      bp.Normal
    ],
    [
      bp.Normal,
      bp.Normal,
      bp.DoubleWordScore,
      bp.Normal,
      bp.Normal,
      bp.Normal,
      bp.DoubleLetterScore,
      bp.Normal,
      bp.DoubleLetterScore,
      bp.Normal,
      bp.Normal,
      bp.Normal,
      bp.DoubleWordScore,
      bp.Normal,
      bp.Normal
    ],
    [
      bp.DoubleLetterScore,
      bp.Normal,
      bp.Normal,
      bp.DoubleWordScore,
      bp.Normal,
      bp.Normal,
      bp.Normal,
      bp.DoubleLetterScore,
      bp.Normal,
      bp.Normal,
      bp.Normal,
      bp.DoubleWordScore,
      bp.Normal,
      bp.Normal,
      bp.DoubleLetterScore
    ],
    [
      bp.Normal,
      bp.Normal,
      bp.Normal,
      bp.Normal,
      bp.DoubleWordScore,
      bp.Normal,
      bp.Normal,
      bp.Normal,
      bp.Normal,
      bp.Normal,
      bp.DoubleWordScore,
      bp.Normal,
      bp.Normal,
      bp.Normal,
      bp.Normal
    ],
    [
      bp.Normal,
      bp.TrippleLetterScore,
      bp.Normal,
      bp.Normal,
      bp.Normal,
      bp.TrippleLetterScore,
      bp.Normal,
      bp.Normal,
      bp.Normal,
      bp.TrippleLetterScore,
      bp.Normal,
      bp.Normal,
      bp.Normal,
      bp.TrippleLetterScore,
      bp.Normal
    ],
    [
      bp.Normal,
      bp.Normal,
      bp.DoubleLetterScore,
      bp.Normal,
      bp.Normal,
      bp.Normal,
      bp.DoubleLetterScore,
      bp.Normal,
      bp.DoubleLetterScore,
      bp.Normal,
      bp.Normal,
      bp.Normal,
      bp.DoubleLetterScore,
      bp.Normal,
      bp.Normal
    ],
    [
      bp.TrippleWordScore,
      bp.Normal,
      bp.Normal,
      bp.DoubleLetterScore,
      bp.Normal,
      bp.Normal,
      bp.Normal,
      bp.Middle,
      bp.Normal,
      bp.Normal,
      bp.Normal,
      bp.DoubleLetterScore,
      bp.Normal,
      bp.Normal,
      bp.TrippleWordScore
    ],
    [
      bp.Normal,
      bp.Normal,
      bp.DoubleLetterScore,
      bp.Normal,
      bp.Normal,
      bp.Normal,
      bp.DoubleLetterScore,
      bp.Normal,
      bp.DoubleLetterScore,
      bp.Normal,
      bp.Normal,
      bp.Normal,
      bp.DoubleLetterScore,
      bp.Normal,
      bp.Normal
    ],
    [
      bp.Normal,
      bp.TrippleLetterScore,
      bp.Normal,
      bp.Normal,
      bp.Normal,
      bp.TrippleLetterScore,
      bp.Normal,
      bp.Normal,
      bp.Normal,
      bp.TrippleLetterScore,
      bp.Normal,
      bp.Normal,
      bp.Normal,
      bp.TrippleLetterScore,
      bp.Normal
    ],
    [
      bp.Normal,
      bp.Normal,
      bp.Normal,
      bp.Normal,
      bp.DoubleWordScore,
      bp.Normal,
      bp.Normal,
      bp.Normal,
      bp.Normal,
      bp.Normal,
      bp.DoubleWordScore,
      bp.Normal,
      bp.Normal,
      bp.Normal,
      bp.Normal
    ],
    [
      bp.DoubleLetterScore,
      bp.Normal,
      bp.Normal,
      bp.DoubleWordScore,
      bp.Normal,
      bp.Normal,
      bp.Normal,
      bp.DoubleLetterScore,
      bp.Normal,
      bp.Normal,
      bp.Normal,
      bp.DoubleWordScore,
      bp.Normal,
      bp.Normal,
      bp.DoubleLetterScore
    ],
    [
      bp.Normal,
      bp.Normal,
      bp.DoubleWordScore,
      bp.Normal,
      bp.Normal,
      bp.Normal,
      bp.DoubleLetterScore,
      bp.Normal,
      bp.DoubleLetterScore,
      bp.Normal,
      bp.Normal,
      bp.Normal,
      bp.DoubleWordScore,
      bp.Normal,
      bp.Normal
    ],
    [
      bp.Normal,
      bp.DoubleWordScore,
      bp.Normal,
      bp.Normal,
      bp.Normal,
      bp.TrippleLetterScore,
      bp.Normal,
      bp.Normal,
      bp.Normal,
      bp.TrippleLetterScore,
      bp.Normal,
      bp.Normal,
      bp.Normal,
      bp.DoubleWordScore,
      bp.Normal
    ],
    [
      bp.TrippleWordScore,
      bp.Normal,
      bp.Normal,
      bp.DoubleLetterScore,
      bp.Normal,
      bp.Normal,
      bp.Normal,
      bp.TrippleWordScore,
      bp.Normal,
      bp.Normal,
      bp.Normal,
      bp.DoubleLetterScore,
      bp.Normal,
      bp.Normal,
      bp.TrippleWordScore
    ]
  ];

  useEffect(() => {
    // Resize board on load to ensure it is the correct dimensions
    resizeBoard();

    window.addEventListener("resize", resizeBoard);
  });

  const boardStyle = {
    width: "750px"
  };

  const rowStyle = {
    height: "6.666666%"
  };

  return (
    <div className="flex justify-center w-screen select-none">
      <div id="scrabble-board" className="flex flex-col border-solid border-2 border-black" style={boardStyle}>
        {board.map((row, i) => (
          <div key={i} className="flex flex-row" style={rowStyle}>
            {row.map((tile, i) => (
              <Tile key={i} tile={tile} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function Tile(props: { tile: BoardTile }) {
  const tileStyle = {
    width: "6.7%"
  };

  let classes = ["w-16", "h-full", "border-solid", "border-2", "border-black"];
  let text;

  switch (props.tile) {
    case BoardTile.TrippleWordScore:
      classes.push("bg-yellow-400");
      text = "tws";
      break;

    case BoardTile.DoubleWordScore:
      classes.push("bg-red-400");
      text = "dws";
      break;

    case BoardTile.TrippleLetterScore:
      classes.push("bg-green-400");
      text = "tls";
      break;

    case BoardTile.DoubleLetterScore:
      classes.push("bg-blue-400");
      text = "dls";
      break;

    case BoardTile.Middle:
      classes.push("bg-red-500");
      text = "mid";
      break;

    case BoardTile.Normal:
    default:
      classes.push("bg-white");
      text = "nor";
      break;
  }

  return (
    <div className={`${classes.join(" ")} bg-white`} style={tileStyle}>
      {text}
    </div>
  );
}

function resizeBoard() {
  const board = document.getElementById("scrabble-board")!;
  const boardRect = board.getBoundingClientRect();

  board.style.height = `${boardRect.width}px`;

  const el = board.childNodes[0].childNodes[0] as HTMLElement;
  const elRect = el.getBoundingClientRect();

  top_coords.top_x = elRect.x;
  top_coords.top_y = elRect.y;
  top_coords.width = elRect.width;
  top_coords.height = elRect.height;
}
