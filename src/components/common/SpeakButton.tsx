"use client";

import { Volume2, Square } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSpeech } from "@/hooks/useSpeech";


interface Props {
  text: string;
}


export default function SpeakButton({ text }: Props) {

  const {
    speak,
    stop,
    speaking,
    loading,
  } = useSpeech();


  return (
    <Button
      type="button"
      variant="outline"
      onClick={() => {
        speaking ? stop() : speak(text);
      }}
    >

      {speaking ? (
        <>
          <Square className="mr-2 h-4 w-4" />
          Stop Voice
        </>
      ) : (
        <>
          <Volume2 className="mr-2 h-4 w-4" />
          {loading ? "Generating..." : "Listen"}
        </>
      )}

    </Button>
  );
}