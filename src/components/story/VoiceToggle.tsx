"use client";

import { Mic, Keyboard } from "lucide-react";

interface Props {
  value: "type" | "voice";
  onChange: (value: "type" | "voice") => void;
}

export default function VoiceToggle({
  value,
  onChange,
}: Props) {
  return (
    <div>
      <label className="mb-3 block text-lg font-semibold">
        Input Method
      </label>

      <div className="grid grid-cols-2 gap-4">

        <button
          type="button"
          onClick={() => onChange("type")}
          className={`flex items-center justify-center gap-2 rounded-xl border p-4 transition ${
            value === "type"
              ? "border-cyan-500 bg-cyan-500/10 text-cyan-300"
              : "border-slate-700"
          }`}
        >
          <Keyboard size={20} />
          Type
        </button>


        <button
          type="button"
          onClick={() => onChange("voice")}
          className={`flex items-center justify-center gap-2 rounded-xl border p-4 transition ${
            value === "voice"
              ? "border-cyan-500 bg-cyan-500/10 text-cyan-300"
              : "border-slate-700"
          }`}
        >
          <Mic size={20} />
          Voice
        </button>

      </div>
    </div>
  );
}