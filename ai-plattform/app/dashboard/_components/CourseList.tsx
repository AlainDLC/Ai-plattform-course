"use client";
import { useUser } from "@clerk/nextjs";
import axios from "axios";
import React, { useEffect, useState } from "react";
import CourseCardItem from "./CourseCardItem";

function CourseList() {
  const [courseList, setCourseList] = useState<string[]>([]);
  const { user } = useUser();

  useEffect(() => {
    user && GetCourseList();
  }, [user]);

  const GetCourseList = async () => {
    try {
      const result = await axios.post("/api/courses", {
        createdBy: user?.primaryEmailAddress?.emailAddress || "",
      });

      setCourseList(result?.data);
      console.log("setCourseList", result?.data);
    } catch (err) {
      console.error("GetCourseList", err);
    }
  };
  return (
    <div className="mt-10">
      <h2 className="font-bold text-2xl ">Your Ai Material</h2>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 mt-2 gap-5 ">
        {courseList.map((course, index) => (
          <CourseCardItem course={course} key={index} />
        ))}
      </div>
    </div>
  );
}

export default CourseList;
