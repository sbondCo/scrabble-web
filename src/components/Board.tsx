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
  let classes = "w-16 h-full border-solid border-2 border-black";

  switch (props.piece) {
    case BoardPiece.TrippleWordScore:
      return <div className={`${classes} bg-yellow-400`}>tripple ws</div>;
    case BoardPiece.DoubleWordScore:
      return <div className={`${classes} bg-red-400`}>double ws</div>;
    case BoardPiece.TrippleLetterScore:
      return <div className={`${classes} bg-green-400`}>tripple ls</div>;
    case BoardPiece.DoubleLetterScore:
      return <div className={`${classes} bg-blue-400`}>double ls</div>;
    case BoardPiece.Middle:
      return <div className={`${classes} bg-red-500`}>middle</div>;
    case BoardPiece.Normal:
    default:
      return <div className={`${classes} bg-white`}></div>;
  }
}

function resizeBoard(event: UIEvent) {
  const board = document.getElementById("scrabble-board")!;
  const boardRect = board.getBoundingClientRect();
  const resizeStep = 5;

  console.log(board);

  console.log("----------");
  console.log("board", boardRect);
  console.log("w", window.innerWidth, window.innerHeight);

  if (boardRect.width >= window.innerWidth) {
    board.style.width = `${window.innerWidth - resizeStep}px`;
    board.style.height = `${window.innerWidth - resizeStep}px`;
  }
}
