import { db } from "@/configs/db";
import { inngest } from "./client";
import {
  CHAPTER_NOTES_TABLES,
  STUDY_TABLE,
  USER_TABLE,
} from "@/configs/schema";
import { eq } from "drizzle-orm";
import { generateNotesAIModel } from "@/configs/AIModel";

export const CreateNewUser = inngest.createFunction(
  { id: "create-user" },
  { event: "user.create" },
  async ({ event, step }) => {
    return await step.run(
      "Check User and create New if Not in Db",
      async () => {
        try {
          const user = event.data;
          if (!user?.primaryEmailAddress?.emailAddress) {
            throw new Error("User email is missing");
          }

          const result = await db
            .select()
            .from(USER_TABLE)
            .where(eq(USER_TABLE.email, user.primaryEmailAddress.emailAddress));

          if (result.length === 0) {
            await db.insert(USER_TABLE).values({
              name: user.fullName || "",
              email: user.primaryEmailAddress.emailAddress,
            });

            return result;
          }

          return "Success";
        } catch (err) {
          console.error("Error in CreateNewUser function:", err);
          throw err;
        }
      }
    );
  }
);

export const GenerateNotes = inngest.createFunction(
  { id: "generate-course" },
  { event: "notes.generate" },
  async ({ event, step }) => {
    try {
      const { course } = event.data;
      const notesResult = await step.run("Generate Chapter Notes", async () => {
        const Chapters = course?.courseLayOut.chapters;
        let index = 0;
        Chapters.forEach(async (chapter: any) => {
          const PROMT =
            "Generate exam material detail for each chapter, Make sure to includes all topic point in the content, make sure to give content in HTML format (Do not Add HTML,Head,Body,title tag),The chapters:" +
            JSON.stringify(chapter);
          const result = await generateNotesAIModel.sendMessage(PROMT);
          const aiResp = result.response.text();

          await db.insert(CHAPTER_NOTES_TABLES).values({
            chapterId: index.toString(),
            courseId: course?.courseId,
            notes: aiResp,
          });
          index = index + 1;
        });
        return "Completed";
      });

      const updateCourseStatus = await step.run(
        "Update Course Status to Ready",
        async () => {
          const result = await db
            .update(STUDY_TABLE)
            .set({
              status: "Ready",
            })
            .where(eq(STUDY_TABLE.courseId, course?.courseId));
          return "Success";
        }
      );
    } catch (err) {
      console.error("GenerateNotes", err);
    }
  }
);
