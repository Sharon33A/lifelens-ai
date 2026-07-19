import { NextRequest, NextResponse } from "next/server";
import { generateFollowupQuestions } from "@/services/followup";

export async function POST(req: NextRequest) {
  try {
    const {
      story,
      desiredOutcomes,
      decisionInfluences,
    } = await req.json();

    if (!story) {
      return NextResponse.json(
        {
          success: false,
          message: "Story is required.",
        },
        {
          status: 400,
        }
      );
    }

    const result = await generateFollowupQuestions({
          story,
          desiredOutcomes,
          decisionInfluences,
    });

    return NextResponse.json({
      success: true,
      data: result,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to generate follow-up questions.",
      },
      {
        status: 500,
      }
    );
  }
}