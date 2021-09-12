import React from "react";

let isDragging = false;

export default function Piece() {
  let pieceRef = React.useRef<HTMLDivElement>(null);

  const mouseDown = () => {
    isDragging = true;
  };

  const mouseUp = () => {
    isDragging = false;
  };

  const mouseMove = (event: MouseEvent) => {
    // console.log(event);

    let piece = pieceRef.current;

    if (isDragging) {
      if (piece) {
        let pieceRect = piece.getBoundingClientRect();

        piece.style.top = `${event.clientY - pieceRect.height / 2}px`;
        piece.style.left = `${event.clientX - pieceRect.width / 2}px`;
      }
    }
  };

  window.addEventListener("mousemove", mouseMove);

  return (
    <div
      ref={pieceRef}
      onMouseDown={mouseDown}
      onMouseUp={mouseUp}
      // onMouseMove={mouseMove}
      className="fixed w-16 h-16 border-solid border-2 border-black bg-yellow-900 select-none"
    >
      A
    </div>
  );
}
