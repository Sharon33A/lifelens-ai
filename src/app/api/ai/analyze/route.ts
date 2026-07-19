import { NextRequest, NextResponse } from "next/server";
import { generateAnalysis } from "@/services/analysis";

export async function POST(req: NextRequest) {
  try {
    const { story, questions, answers } = await req.json();

    if (!story || !questions || !answers) {
      return NextResponse.json(
        {
          success: false,
          message: "Missing required data.",
        },
        {
          status: 400,
        }
      );
    }

    const analysis = await generateAnalysis(
      story,
      questions,
      answers
    );

    return NextResponse.json({
      success: true,
      data: analysis,
    });

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Analysis failed.",
      },
      {
        status: 500,
      }
    );
  }
}