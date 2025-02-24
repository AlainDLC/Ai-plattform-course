import { db } from "@/configs/db";
import { STUDY_TABLE } from "@/configs/schema";
import { desc, eq } from "drizzle-orm";

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
      .where(eq(STUDY_TABLE.createdBy, createdBy))
      .orderBy(desc(STUDY_TABLE.id));

    return NextResponse.json(result);
  } catch (err) {
    console.error("Error in POST request:", err);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function GET(req: Request) {
  const reqUrl = req.url;
  const { searchParams } = new URL(reqUrl);
  const courseId = searchParams?.get("courseId");

  const course = await db
    .select()
    .from(STUDY_TABLE)
    .where(eq(STUDY_TABLE?.courseId, courseId || ""));

  return NextResponse.json({ result: course[0] });
}
