import { inngest } from "@/inngest/client";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { user } = await req.json();

    if (!user) {
      return NextResponse.json(
        { error: "User data is missing" },
        { status: 400 }
      );
    }

    const result = await inngest.send({
      name: "user.create", // Matchar eventet från din första kod
      data: user, // Direkt user istället för { user: user }
    });

    return NextResponse.json(result);
  } catch (err) {
    console.error("Error in POST request:", err);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
