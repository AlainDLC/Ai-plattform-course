"use client";

import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import FlashCardItem from "./_components/FlashCardItem";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface FlashcardContent {
  front: string;
  back: string;
}

type Flashcard = {
  courseId: string;
  status: string;
  type: string;
  content: FlashcardContent[];
};

function FlashCards() {
  const { courseId } = useParams();
  const [flashcard, setFlashcard] = useState<Flashcard[]>([]);
  const [isFlipped, setIsFlipped] = useState<boolean>();

  useEffect(() => {
    GetFlashCards();
  }, []);

  const GetFlashCards = async () => {
    try {
      const result = await axios.post("/api/study-type", {
        courseId: courseId,
        studyType: "Flashcard",
      });

      setFlashcard(result?.data);

      console.log("Flashcard", result.data);
    } catch (err) {
      console.log("GetFlashCards", err);
    }
  };

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div>
      <h2 className="font-bold text-2xl">FlashCards</h2>
      <div className="flex items-center justify-center">
        <Carousel>
          <CarouselContent>
            {flashcard.map((flashcard, index) => (
              <CarouselItem
                key={index}
                className="flex items-center justify-center mt-10"
              >
                <FlashCardItem
                  isFlipped={isFlipped}
                  handleClick={handleClick}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}

export default FlashCards;
