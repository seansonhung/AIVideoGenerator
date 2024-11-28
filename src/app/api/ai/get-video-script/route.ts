import { NextResponse } from "next/server";
import { chatSession } from "../../../../config/geminiAiModel";

export async function POST(req: Request) {
  try {
    const  { prompt } = await req.json();

    const result = await chatSession.sendMessage(prompt);
    console.log(result.response.text());

    return NextResponse.json({'result': JSON.parse(result.response.text())});

  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      );
    } else {
      return NextResponse.json(
        { error: "An unknown error occurred" },
        { status: 500 }
      );
    }
  }
}
