"use client";
import { useUser } from "@clerk/nextjs";
import axios from "axios";
import React, { useEffect, useState } from "react";
import CourseCardItem from "./CourseCardItem";
import { Button } from "@heroui/button";
import { RefreshCw } from "lucide-react";
import { Course } from "../types/course";

function CourseList() {
  const [courseList, setCourseList] = useState<Course[]>([]);
  const [loading, setLoding] = useState<boolean>(false);
  const { user } = useUser();

  useEffect(() => {
    user && GetCourseList();
  }, [user]);

  const GetCourseList = async () => {
    setLoding(true);
    try {
      const result = await axios.post("/api/courses", {
        createdBy: user?.primaryEmailAddress?.emailAddress || "",
      });

      setCourseList(result?.data);
      console.log("setCourseList", result?.data);
      setLoding(false);
    } catch (err) {
      console.error("GetCourseList", err);
    }
  };
  return (
    <div className="mt-10">
      <h2 className="font-bold text-2xl flex justify-between items-center ">
        Your Ai Material
        <Button
          disabled={loading}
          aria-label="refrech "
          className="bg-slate-50"
          onPress={GetCourseList}
        >
          <RefreshCw className="w-5 h-5" />
          Refresh
        </Button>
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 mt-4 gap-5 ">
        {loading == false
          ? courseList.map((course, index) => (
              <CourseCardItem course={course} key={index} />
            ))
          : [1, 2, 3, 4, 5].map((_, index) => (
              <div
                key={index}
                className="h-56 w-full bg-slate-100 rounded-lg animate-pulse"
              ></div>
            ))}
      </div>
    </div>
  );
}

export default CourseList;
