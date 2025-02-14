"use client";
import { db } from "@/configs/db";
import { USER_TABLE } from "@/configs/schema";
import { useUser } from "@clerk/nextjs";
import { eq } from "drizzle-orm";
import React, { ReactNode, useEffect } from "react";
import axios from "axios";

interface ProviderProps {
  children: ReactNode;
}

function Provider({ children }: ProviderProps) {
  const { user } = useUser();

  useEffect(() => {
    user && CheckIsNewUser();
  }, [user]);

  const CheckIsNewUser = async () => {
    try {
      const resp = await axios.post("/api/create-user", { user: user });
      console.log(resp?.data);
    } catch (error) {}
  };
  return <div>{children}</div>;
}

export default Provider;
