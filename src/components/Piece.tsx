import React from "react";
import { top_coords } from "./Board";

let isDragging = false;

export default function Piece() {
  let pieceRef = React.useRef<HTMLDivElement>(null);

  const mouseDown = () => {
    isDragging = true;
  };

  const mouseUp = (event: React.MouseEvent) => {
    const piece = pieceRef.current;

    let collideX = Math.trunc((event.pageX - top_coords.top_x) / top_coords.height);
    let collideY = Math.trunc((event.pageY - top_coords.top_y) / top_coords.width);

    const board = document.getElementById("scrabble-board")!;
    const boardTile = board.childNodes[collideY]?.childNodes[collideX] as HTMLElement;

    if (boardTile !== undefined) {
      const tileRect = boardTile.getBoundingClientRect();
      const pieceRect = piece!.getBoundingClientRect();

      piece!.style.left = `${tileRect.x + (tileRect.width - pieceRect.width) / 2}px`;
      piece!.style.top = `${tileRect.y + (tileRect.height - pieceRect.height) / 2}px`;
    }

    isDragging = false;
  };

  const mouseMove = (event: MouseEvent) => {
    // Don't do anything unless being dragged
    if (isDragging) {
      const piece = pieceRef.current;

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
      className="fixed w-10 h-10 border-solid border-2 border-black bg-yellow-900 select-none"
    >
      A
    </div>
  );
}
