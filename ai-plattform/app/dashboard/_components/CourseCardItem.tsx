"use client";

import { Button } from "@heroui/button";
import { Progress } from "@heroui/progress";
import { RefreshCwIcon } from "lucide-react";
import Image from "next/image";

export interface Course {
  courseTitle: string;
  courseSummary: string;
  chapters: Chapter[];
  status?: string;
}

interface Chapter {
  chapterTitle: string;
  chapterSummary: string;
  topics: string[];
}

function CourseCardItem({ course }: any) {
  console.log(course);

  return (
    <div className="border rounded-lg shadow-sm p-4">
      <div>
        <div className="flex justify-between items-center">
          <Image src={"/lap.png"} alt="lap" height={50} width={50} />
          <h2 className="text-[10px] p-1 px-2 rounded-full">20 Dec 2025</h2>
        </div>
        <h2 className="mt-3 font-medium text-lg">
          {course?.courseLayOut.courseTitle}
        </h2>
        <p className="text-sm line-clamp-2 text-slate-500 mt-2">
          {course.courseLayOut.courseSummary}
        </p>
        <div className="mt-3">
          <Progress value={0} aria-label="Progress" />
        </div>
        <div className="flex justify-end mt-3">
          {course.status === "Generating" ? (
            <h2 className="text-sm flex gap-2 items-center p-1 px-2 rounded-full bg-slate-300 text-white">
              <RefreshCwIcon className="h-5 w-5 animate-spin text-primary" />
              AI magic render...
            </h2>
          ) : (
            <Button color="primary" aria-label="Click">
              View
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default CourseCardItem;
