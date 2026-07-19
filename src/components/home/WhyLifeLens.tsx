import { ShieldCheck, BrainCircuit, Languages, Mic } from "lucide-react";

const features = [
  {
    icon: BrainCircuit,
    title: "Multi-Agent Intelligence",
    text: "Different AI experts collaborate before suggesting a decision.",
  },
  {
    icon: ShieldCheck,
    title: "Decision Readiness",
    text: "Measure confidence, pressure, risks and knowledge gaps.",
  },
  {
    icon: Languages,
    title: "Built for India",
    text: "Supports multiple Indian languages for input and responses.",
  },
  {
    icon: Mic,
    title: "Voice First",
    text: "Speak naturally and receive AI guidance by voice.",
  },
];

export default function WhyLifeLens() {
  return (
    <section
      id="why-lifelens"
      className="scroll-mt-24 bg-slate-900/40 py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="font-semibold uppercase tracking-widest text-cyan-400">
            WHY LIFELENS
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            Your AI Decision Companion
          </h2>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {features.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-800 bg-slate-950/70 p-8 transition hover:border-cyan-500"
            >
              <item.icon className="h-10 w-10 text-cyan-400" />

              <h3 className="mt-6 text-2xl font-semibold">
                {item.title}
              </h3>

              <p className="mt-3 leading-7 text-slate-400">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}