"use client";
import { MaterialListProps } from "./StudyMaterialSection";
import Image from "next/image";
import { Button } from "@heroui/button";
import { GenerateStudyTypeContent } from "@/inngest/functions";
import axios from "axios";
import { useEffect } from "react";
import { Course } from "@/app/dashboard/types/course";

interface MaterialCardItemProps {
  item: MaterialListProps;
  studyTypeContent: any;
}

function MaterailCardItem({
  item,
  studyTypeContent,
  course,
}: MaterialCardItemProps & { course: Course }) {
  const GenerateContent = async (course: Course) => {
    const CHAPTERS = Array.isArray(course?.courseLayOut?.chapters)
      ? course.courseLayOut.chapters
      : [];

    CHAPTERS.forEach((chapter) => {
      chapter.courseTitle;
    });

    /*  course?.courseLayout.chapters.forEach((chapter: string) => {
      chapters = chapter + "," + chapters;
    });*/
    // console.log("chapters", chapters);

    //const result = await axios.post("/api/study-type-content", {});
  };
  useEffect(() => {
    GenerateContent(course);
  }, []);
  return (
    <div
      className={`border shadow-md rounded-lg p-5 flex flex-col items-center ${
        studyTypeContent?.[item.type]?.length == null && "grayscale"
      }`}
    >
      {studyTypeContent?.[item.type]?.length == null ? (
        <h2 className="p-1 px-2 bg-blue-400 text-white rounded-full text-[10px] mb-2">
          Generate
        </h2>
      ) : (
        <h2 className="p-1 px-2 bg-blue-400 text-white rounded-full text-[10px] mb-2">
          Ready
        </h2>
      )}
      <Image src={item.icon} alt={item.name} width={50} height={50} />
      <h2 className="font-medium mt-3">{item.name}</h2>
      <p className="text-slate-500 text-sm text-center">{item.desc}</p>
      {studyTypeContent?.[item.type]?.length == null ? (
        <Button
          className="mt-3  w-full bg-slate-50 border-small"
          onPress={() => GenerateContent(course)}
        >
          Generate
        </Button>
      ) : (
        <Button className="mt-3  w-full bg-slate-50 border-small">View</Button>
      )}
    </div>
  );
}

export default MaterailCardItem;
