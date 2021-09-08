import { useEffect } from "react";

enum BoardPiece {
  Normal = 0,
  TrippleWordScore = 1,
  DoubleWordScore = 2,
  TrippleLetterScore = 4,
  DoubleLetterScore = 3,
  Middle = 5
}

export default function Board() {
  const bp = BoardPiece;
  let board = [
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
    window.addEventListener("resize", resizeBoard);
  });

  const rowStyle = {
    height: "6.666666%"
  };

  return (
    <div className="flex justify-center w-screen">
      <div id="scrabble-board" className="flex flex-col border-solid border-2 border-black">
        {board.map((row, i) => (
          <div key={i} className="flex flex-row" style={rowStyle}>
            {row.map((piece, i) => (
              <Piece key={i} piece={piece} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function Piece(props: { piece: BoardPiece }) {
  const pieceStyle = {
    width: "6.666666%"
  };

  let classes = ["w-16", "h-full", "border-solid", "border-2", "border-black"];
  let text;

  switch (props.piece) {
    case BoardPiece.TrippleWordScore:
      classes.push("bg-yellow-400");
      text = "tws";
      break;

    case BoardPiece.DoubleWordScore:
      classes.push("bg-red-400");
      text = "dws";
      break;

    case BoardPiece.TrippleLetterScore:
      classes.push("bg-green-400");
      text = "tls";
      break;

    case BoardPiece.DoubleLetterScore:
      classes.push("bg-blue-400");
      text = "dls";
      break;

    case BoardPiece.Middle:
      classes.push("bg-red-500");
      text = "mid";
      break;

    case BoardPiece.Normal:
    default:
      classes.push("bg-white");
      text = "nor";
      break;
  }

  return (
    <div className={`${classes.join(" ")} bg-white`} style={pieceStyle}>
      {text}
    </div>
  );
}

function resizeBoard(event: UIEvent) {
  const board = document.getElementById("scrabble-board")!;
  const boardRect = board.getBoundingClientRect();
  const resizeStep = 5;

  // console.log(board);

  console.log("----------");
  // console.log("board", boardRect);
  console.log(window.innerWidth, window.innerHeight);
  console.log(boardRect.width, boardRect.height);

  // if (boardRect.width >= window.innerWidth) {
  // if (boardRect.width > 750) {
  //   board.style.width = `${window.innerWidth - resizeStep}px`;
  //   board.style.height = `${window.innerWidth - resizeStep}px`;
  // }
  // }
}
