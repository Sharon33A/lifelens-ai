import { NextRequest, NextResponse } from "next/server";
import { saveMemory } from "@/services/memory";

export async function POST(req: NextRequest) {
  try {
    const { userId, memory } = await req.json();

    const result = await saveMemory(userId, memory);

    return NextResponse.json({
      success: true,
      result,
    });
  } catch (err) {
    console.error(err);

    return NextResponse.json(
      {
        success: false,
        error: String(err),
      },
      {
        status: 500,
      }
    );
  }
}