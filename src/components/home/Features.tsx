import {
  Brain,
  GitBranch,
  Languages,
  Mic,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI Decision Intelligence",
    text: "Analyzes your situation from emotional, financial, career and long-term perspectives.",
  },
  {
    icon: GitBranch,
    title: "Multiple Decision Paths",
    text: "Explore three realistic paths instead of receiving a single answer.",
  },
  {
    icon: ShieldCheck,
    title: "Decision Readiness Score",
    text: "Know whether you're ready to decide or need more clarity.",
  },
  {
    icon: Languages,
    title: "Indian Languages",
    text: "Describe your story in your preferred language.",
  },
  {
    icon: Mic,
    title: "Voice Input",
    text: "Speak naturally instead of typing long situations.",
  },
  {
    icon: Sparkles,
    title: "Personalized Action Plan",
    text: "Receive practical next steps tailored to your chosen path.",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="scroll-mt-24 bg-slate-950 py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="font-semibold uppercase tracking-widest text-cyan-400">
            FEATURES
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            Everything you need for better decisions
          </h2>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/50 p-8 transition hover:border-cyan-500"
            >
              <feature.icon className="h-10 w-10 text-cyan-400" />

              <h3 className="mt-6 text-xl font-semibold">
                {feature.title}
              </h3>

              <p className="mt-3 leading-7 text-slate-400">
                {feature.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}