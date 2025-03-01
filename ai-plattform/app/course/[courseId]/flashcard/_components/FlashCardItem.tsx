"use client";
import ReactCardFlip from "react-card-flip";

interface FlashCardItemProps {
  isFlipped: boolean | undefined;
  handleClick: () => void;
}

function FlashCardItem({ isFlipped, handleClick }: FlashCardItemProps) {
  return (
    <div>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <div
          className="p-4 bg-primary text-white flex items-center justify-center rounded-lg shadow-lg
        cursor-pointer h-[250px] w-[200px] md:h-[350px] md:w-[300px]"
          onClick={handleClick}
        >
          <h2>Question Front Side</h2>
        </div>

        <div
          className="p-4 bg-slate-100 shadow-lg text-primary flex items-center justify-center rounded-lg
        cursor-pointer h-[250px] w-[200px] md:h-[350px] md:w-[300px]"
          onClick={handleClick}
        >
          <h2>Answer Back Side</h2>
        </div>
      </ReactCardFlip>
    </div>
  );
}

export default FlashCardItem;
