import React from "react";
import DashBoardHeader from "../dashboard/_components/DashBoardHeader";

interface DashBoardHeader {
  children: React.ReactNode;
}

function CourseViewlayout({ children }: DashBoardHeader) {
  return (
    <div>
      <DashBoardHeader />
      <div className="mt-10 md:mx-36 lg:60 ">{children}</div>
    </div>
  );
}

export default CourseViewlayout;
