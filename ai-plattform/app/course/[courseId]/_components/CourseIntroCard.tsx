"use client";
import { Course } from "@/app/dashboard/types/course";
import { Progress } from "@heroui/progress";
import Image from "next/image";
import React from "react";

function CourseIntroCard({ course }: { course: Course }) {
  return (
    <div className="flex gap-5 items-center border shadow-md p-5 rounded-lg ">
      <Image
        src={"/dlc.png"}
        alt="dlc"
        height={70}
        width={70}
        className="object-contain  rounded-lg  "
        priority
      />
      <div>
        <h2 className="font-bold text-2xl">
          {course?.courseLayOut.courseTitle}
        </h2>
        <p className="break-words"> {course?.courseLayOut.courseSummary} </p>
        <Progress aria-label="go" className="mt-3" />
        <h2 className="mt-3 text-lg text-primary">
          Total Chapter: {[course?.courseLayOut?.chapters.length]}
        </h2>
      </div>
    </div>
  );
}

export default CourseIntroCard;
