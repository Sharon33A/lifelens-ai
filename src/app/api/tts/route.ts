import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { text } = await req.json();

    if (!text || !text.trim()) {
      return NextResponse.json(
        { success: false, message: "Text is required." },
        { status: 400 }
      );
    }

    const response = await fetch(
      "https://api.vachana.ai/api/v1/tts/inference",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-API-Key-ID": process.env.GNANI_API_KEY!,
        },
        body: JSON.stringify({
          text,
          model: "vachana-voice-v3",
          voice: "Karan",
          audio_config: {
            sample_rate: 44100,
            num_channels: 1,
            sample_width: 2,
            encoding: "linear_pcm",
            container: "wav",
          },
        }),
      }
    );

    if (!response.ok) {
      const err = await response.text();

      console.error("Gnani TTS Error:", err);

      return NextResponse.json(
        {
          success: false,
          message: "Gnani TTS failed.",
        },
        {
          status: response.status,
        }
      );
    }

    const audio = await response.arrayBuffer();

    return new Response(audio, {
      headers: {
        "Content-Type": "audio/wav",
      },
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Unable to generate speech.",
      },
      {
        status: 500,
      }
    );
  }
}