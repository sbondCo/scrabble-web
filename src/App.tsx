enum BoardPiece {
  Normal = 0,
  TrippleWordScore = 1,
  DoubleWordScore = 2,
  TrippleLetterScore = 4,
  DoubleLetterScore = 3,
  Middle = 5
}

export default function App() {
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

  return (
    <div className="App">
      <div className="flex justify-center w-screen">
        <div className="flex flex-col border-solid border-2 border-black">
          {board.map((row, i) => (
            <div key={i} className="flex flex-row">
              {row.map((piece, i) => (
                <Piece key={i} piece={piece} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Piece(props: { piece: BoardPiece }) {
  switch (props.piece) {
    case BoardPiece.TrippleWordScore:
      return <div className="w-16 h-16 border-solid border-2 border-black bg-yellow-400">tripple ws</div>;
    case BoardPiece.DoubleWordScore:
      return <div className="w-16 h-16 border-solid border-2 border-black bg-red-400">double ws</div>;
    case BoardPiece.TrippleLetterScore:
      return <div className="w-16 h-16 border-solid border-2 border-black bg-green-400">tripple ls</div>;
    case BoardPiece.DoubleLetterScore:
      return <div className="w-16 h-16 border-solid border-2 border-black bg-blue-400">double ls</div>;
    case BoardPiece.Middle:
      return <div className="w-16 h-16 border-solid border-2 border-black bg-red-500">middle</div>;
    case BoardPiece.Normal:
    default:
      return <div className="w-16 h-16 border-solid border-2 border-black bg-white"></div>;
  }
}
