import { courseOutLineAIModel } from "@/configs/AIModel";
import { db } from "@/configs/db";
import { STUDY_TABLE } from "@/configs/schema";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { difficultyLevel, courseType, courseId, createdBy, topic } =
    await req.json();

  const PROMT =
    "Generate a study material for " +
    topic +
    " for " +
    courseType +
    " and level of difficulty will be " +
    difficultyLevel +
    " with summary of course, List of Chapters along with summary for each chapter, Topic list in each chapter in JSON format";

  const aiResp = await courseOutLineAIModel.sendMessage(PROMT);
  console.log("AI Response:", aiResp);

  const aiResult = JSON.parse(aiResp.response.text());
  const difficulty = difficultyLevel || "Beginner";
  const dbResult = await db
    .insert(STUDY_TABLE)
    .values({
      difficultyLevel: difficulty,
      courseType: courseType,
      courseId: courseId,
      createdBy: createdBy,
      topic: topic,
      courseLayOut: aiResult,
    })
    .returning();

  console.log(dbResult);

  return NextResponse.json({ result: dbResult[0] });
}
