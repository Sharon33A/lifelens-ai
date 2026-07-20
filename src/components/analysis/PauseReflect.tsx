"use client";

import SpeakButton from "@/components/common/SpeakButton";

interface Props {
  reflection: string;
}

export default function PauseReflect({
  reflection,
}: Props) {
  return (
    <section className="mt-16 rounded-3xl border border-amber-500/30 bg-amber-500/10 p-8">

      <div className="flex items-start justify-between">

        <div className="flex items-center gap-3">

          <span className="text-4xl">🪞</span>

          <div>

            <h2 className="text-3xl font-bold">
              Pause & Reflect
            </h2>

            <p className="mt-1 text-amber-200">
              Before making a final decision, take a moment to think.
            </p>

          </div>

        </div>

        <SpeakButton
          text={`
Pause and Reflect.

${reflection}
`}
        />

      </div>

      <div className="mt-8 rounded-2xl bg-slate-900 p-6">

        <p className="text-lg leading-9 text-slate-300">
          {reflection}
        </p>

      </div>

    </section>
  );
}