"use client";

import DashBoardHeader from "@/app/dashboard/_components/DashBoardHeader";

import axios from "axios";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import CourseIntroCard from "./_components/CourseIntroCard";
import StudyMaterialSection from "./_components/StudyMaterialSection";
import ChapterList from "./_components/ChapterList";

function Course() {
  const { courseId } = useParams();
  const [course, setCourse] = useState<any>();

  useEffect(() => {
    GetCourse();
  }, [courseId]);

  const GetCourse = async () => {
    try {
      const result = await axios.get(`/api/courses?courseId=${courseId}`);

      setCourse(result.data?.result);
    } catch (err) {
      console.error("Smäller vid GetCourse", err);
    }
  };
  return (
    <div>
      <div>
        <CourseIntroCard course={course} />
        <StudyMaterialSection courseId={courseId as any} course={course} />
        <ChapterList course={course} />
      </div>
    </div>
  );
}

export default Course;
