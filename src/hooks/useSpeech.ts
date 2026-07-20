"use client";

import { useRef, useState } from "react";

export function useSpeech() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [speaking, setSpeaking] = useState(false);
  const [loading, setLoading] = useState(false);

  async function speak(text: string) {
    try {
      stop();

      setLoading(true);

      const response = await fetch("/api/tts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text,
        }),
      });

      if (!response.ok) {
        throw new Error("Speech generation failed");
      }

      const audioBlob = await response.blob();

      const audioUrl = URL.createObjectURL(audioBlob);

      const audio = new Audio(audioUrl);

      audioRef.current = audio;

      audio.onplay = () => {
        setSpeaking(true);
      };

      audio.onended = () => {
        setSpeaking(false);
        URL.revokeObjectURL(audioUrl);
      };

      await audio.play();

    } catch (error) {
      console.error("TTS error:", error);
      alert("Unable to generate voice.");
    } finally {
      setLoading(false);
    }
  }


  function stop() {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      audioRef.current = null;
    }

    setSpeaking(false);
  }


  return {
    speak,
    stop,
    speaking,
    loading,
  };
}