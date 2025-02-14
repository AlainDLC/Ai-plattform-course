import { serve } from "inngest/next";
import { inngest } from "../../../inngest/client";
import { CreateNewUser } from "@/inngest/functions";

export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
    CreateNewUser, // <-- This is where you'll always add all your functions
  ],
});
