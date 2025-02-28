import { db } from "@/configs/db";
import { STUDY_TYPE_CONTENT_TABLE } from "@/configs/schema";
import { inngest } from "@/inngest/client";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { chapters, courseId, type } = await req.json();

  try {
    const PROMT = `Generate the flashcard on topic: ${chapters}, User interface (UI) Development Basic App Navigation in JSON format with front back content, Maximum 15`;
    const result = await db
      .insert(STUDY_TYPE_CONTENT_TABLE)
      .values({
        courseId: courseId,
        type: type,
      })
      .returning();

    inngest.send({
      name: "studyType.content",
      data: {
        studyType: type,
        promt: PROMT,
        courseId: courseId,
        recordId: result[0].id,
      },
    });

    return NextResponse.json(result[0].id);
  } catch (err) {
    console.error("Stydy-type-content Route", err);
  }
}
