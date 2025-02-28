"use client";
import { MaterialListProps } from "./StudyMaterialSection";
import Image from "next/image";
import { Button } from "@heroui/button";
import { GenerateStudyTypeContent } from "@/inngest/functions";
import axios from "axios";
import { useEffect, useState } from "react";
import { Course } from "@/app/dashboard/types/course";
import { RefreshCcw } from "lucide-react";
import Link from "next/link";

interface MaterialCardItemProps {
  item: MaterialListProps;
  studyTypeContent: any;
  refreshData: any;
}

function MaterailCardItem({
  item,
  studyTypeContent,
  course,
  refreshData,
}: MaterialCardItemProps & { course: Course }) {
  const [loading, isLoding] = useState<boolean>(false);
  const GenerateContent = async () => {
    isLoding(true);
    let chapters = "";
    if (Array.isArray(course.courseLayOut.chapters)) {
      course.courseLayOut.chapters.forEach((chapter) => {
        chapters = chapter.chapterTitle + "," + chapters;
      });
    } else {
      console.log("chapters är inte en array.");
    }

    try {
      const result = await axios.post("/api/study-type-content", {
        courseId: course?.courseId,
        type: item.name,
        chapters: chapters,
      });

      isLoding(false);

      console.log(result);
      refreshData(true);
    } catch (err) {
      console.error("GenerateContent Db", err);
    }
  };

  return (
    <Link href={"/course/" + course?.courseId + item.path}>
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
            onPress={GenerateContent}
          >
            {loading && <RefreshCcw className="animate-spin" />}
            Generate
          </Button>
        ) : (
          <Button className="mt-3  w-full bg-slate-50 border-small">
            View
          </Button>
        )}
      </div>
    </Link>
  );
}

export default MaterailCardItem;
