"use client";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import React from "react";

function WelcomeBanner() {
  const { user } = useUser();
  return (
    <div className="p-5 bg-green-300 text-white rounded-xl flex items-center gap-4">
      <Image src={"/lap.png"} alt="lap" height={100} width={100} />
      <div>
        <h2 className="font-bold text-xl">Welcome {user?.fullName}</h2>
        <p className="font-medium text-md">God to see you agian</p>
      </div>
    </div>
  );
}

export default WelcomeBanner;
