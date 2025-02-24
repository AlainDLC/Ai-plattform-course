"use client";

import { Course } from "@/app/dashboard/types/course";

interface ChapterListProps {
  course?: Course;
}

function ChapterList({ course }: ChapterListProps) {
  const CHAPTERS = Array.isArray(course?.courseLayOut?.chapters)
    ? course.courseLayOut.chapters
    : [];

  return (
    <div className="mt-5">
      <h2 className="font-medium text-xl">Chapters</h2>
      <div className="mt-3">
        {CHAPTERS.length > 0 ? (
          CHAPTERS.map(
            (
              chapter: {
                emoji: string;
                chapterTitle: string;
                chapterSummary: string;
              },
              index: number
            ) => (
              <div
                key={index}
                className="flex gap-5 items-center p-4 shadow-md mb-2 rounded-lg cursor-pointer"
              >
                <h2 className="text-2xl"> {chapter.emoji}</h2>

                <div>
                  <h2 className="font-medium">{chapter?.chapterTitle}</h2>
                  <p className="text-slate-500 text-sm">
                    {chapter?.chapterSummary}
                  </p>
                </div>
              </div>
            )
          )
        ) : (
          <p className="text-gray-500">No chapters available</p>
        )}
      </div>
    </div>
  );
}

export default ChapterList;
