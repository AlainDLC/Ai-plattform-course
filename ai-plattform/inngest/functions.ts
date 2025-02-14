import { db } from "@/configs/db";
import { inngest } from "./client";
import { USER_TABLE } from "@/configs/schema";
import { eq } from "drizzle-orm";

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
