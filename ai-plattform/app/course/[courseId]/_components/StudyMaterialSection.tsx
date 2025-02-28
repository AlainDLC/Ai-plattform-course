"use client";

import axios from "axios";
import MaterailCardItem from "./MaterailCardItem";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Course } from "@/app/dashboard/types/course";

export interface MaterialListProps {
  name: string;
  desc: string;
  icon: string;
  path: string;
  type: string;
}

function StudyMaterialSection({
  courseId,
  course,
}: {
  course: Course;
  courseId: string;
}) {
  const [studyTypeContent, setStudyTypeContent] = useState<any>();
  const MaterialList: MaterialListProps[] = [
    {
      name: "Notes",
      desc: "Read notes to prepere it",
      icon: "/lap.png",
      path: "/notes",
      type: "notes",
    },
    {
      name: "Flashcard",
      desc: "Flashcard help to remember",
      icon: "/lap.png",
      path: "/flashcard",
      type: "flashcard",
    },
    {
      name: "Quiz",
      desc: "Great way to test your knowledge",
      icon: "/lap.png",
      path: "/quiz",
      type: "quiz",
    },
    {
      name: "Question/Answer",
      desc: "Help to pratice ypur learning",
      icon: "/lap.png",
      path: "/qa",
      type: "qa",
    },
  ];

  useEffect(() => {
    GetStudyMaterial();
  }, []);

  const GetStudyMaterial = async () => {
    const result = await axios.post("/api/study-type", {
      courseId: courseId,
      studyType: "ALL",
    });

    console.log("GetStudyMaterial", result?.data);

    setStudyTypeContent(result?.data);
  };

  return (
    <div className="mt-5">
      <h2 className="font-medium text-2xl">Study Material</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-3">
        {MaterialList.map((item, index) => (
          <MaterailCardItem
            key={index}
            item={item}
            studyTypeContent={studyTypeContent}
            course={course}
            refreshData={GetStudyMaterial}
          />
        ))}
      </div>
    </div>
  );
}

export default StudyMaterialSection;
