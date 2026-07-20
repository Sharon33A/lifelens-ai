"use client";

import SpeakButton from "@/components/common/SpeakButton";

type Path = {
  title: string;
  tag: string;
  confidence: number;
  timeline: {
    "3months": string;
    "1year": string;
    "5years": string;
  };
};

interface Props {
  paths: Path[];
}

const emojis = ["🌱", "🌿", "🌸"];

export default function LifeTree({ paths }: Props) {
  return (
    <section className="mt-16">

      <h2 className="mb-10 text-center text-4xl font-bold">
        🌳 Life Simulation
      </h2>

      <div className="flex justify-center text-7xl">
        🌳
      </div>

      <div className="mx-auto mt-2 h-10 w-1 rounded-full bg-amber-700" />

      <div className="mx-auto h-1 max-w-5xl rounded-full bg-amber-700" />

      <div className="mt-8 grid gap-8 lg:grid-cols-3">

        {paths.map((path, index) => (

          <div
            key={index}
            className="relative rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-xl transition duration-300 hover:-translate-y-2 hover:border-cyan-400"
          >

            <div className="absolute -top-8 left-1/2 h-8 w-1 -translate-x-1/2 rounded-full bg-amber-700" />

            <div className="flex items-start justify-between">

              <div>

                <div className="text-5xl">
                  {emojis[index]}
                </div>

              </div>

              <SpeakButton
                text={`
${path.title}

${path.tag}

Confidence Score: ${path.confidence} percent.

After Three Months:
${path.timeline["3months"]}

After One Year:
${path.timeline["1year"]}

After Five Years:
${path.timeline["5years"]}
`}
              />

            </div>

            <div className="mt-4 text-center">

              <h3 className="text-2xl font-bold">
                {path.title}
              </h3>

              <p className="mt-2 text-cyan-300">
                {path.tag}
              </p>

              <div className="mt-4 inline-block rounded-full bg-cyan-500 px-4 py-2 font-bold text-slate-950">
                {path.confidence}% Confidence
              </div>

            </div>

            <div className="mt-8 space-y-5">

              <div className="rounded-xl bg-slate-950 p-4">

                <p className="font-semibold text-cyan-300">
                  📅 3 Months
                </p>

                <p className="mt-2 text-slate-300">
                  {path.timeline["3months"]}
                </p>

              </div>

              <div className="rounded-xl bg-slate-950 p-4">

                <p className="font-semibold text-cyan-300">
                  📅 1 Year
                </p>

                <p className="mt-2 text-slate-300">
                  {path.timeline["1year"]}
                </p>

              </div>

              <div className="rounded-xl bg-slate-950 p-4">

                <p className="font-semibold text-cyan-300">
                  📅 5 Years
                </p>

                <p className="mt-2 text-slate-300">
                  {path.timeline["5years"]}
                </p>

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}