import { db } from "@/configs/db";
import { STUDY_TABLE } from "@/configs/schema";
import { eq } from "drizzle-orm";

import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { createdBy } = await req.json();

    if (!createdBy) {
      return NextResponse.json(
        { error: "User data is missing" },
        { status: 400 }
      );
    }

    const result = await db
      .select()
      .from(STUDY_TABLE)
      .where(eq(STUDY_TABLE.createdBy, createdBy));

    return NextResponse.json(result);
  } catch (err) {
    console.error("Error in POST request:", err);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
