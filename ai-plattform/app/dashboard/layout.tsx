import React, { ReactNode } from "react";
import SideBar from "./_components/SideBar";
import DashBoardHeader from "./_components/DashBoardHeader";

interface DashBoardLayoutProps {
  children: ReactNode;
}

function DashBoardLayout({ children }: DashBoardLayoutProps) {
  return (
    <div>
      <div className="md:-64 hidden md:block fixed">
        <SideBar />
      </div>
      <div className="md:ml-64">
        <DashBoardHeader />
        <div className="p-5">{children}</div>
      </div>
    </div>
  );
}

export default DashBoardLayout;
