import { UserButton } from "@clerk/nextjs";
import React from "react";
import WelcomeBanner from "./_components/WelcomeBanner";
import CourseList from "./_components/CourseList";

function Dashbord() {
  return (
    <div className="">
      <WelcomeBanner />
      <CourseList />
    </div>
  );
}

export default Dashbord;
