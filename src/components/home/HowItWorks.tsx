import { Brain, GitBranch, Sparkles, Target } from "lucide-react";

const steps = [
  {
    icon: Brain,
    title: "Share Your Story",
    desc: "Describe your situation by typing or speaking in your preferred language.",
  },
  {
    icon: Sparkles,
    title: "AI Understands You",
    desc: "LifeLens asks follow-up questions and uncovers what's truly important.",
  },
  {
    icon: GitBranch,
    title: "Explore Future Paths",
    desc: "Compare multiple decision paths with benefits, risks, and long-term outcomes.",
  },
  {
    icon: Target,
    title: "Act with Confidence",
    desc: "Receive a personalized action plan and reflection journey.",
  },
];

export default function HowItWorks() {
  return (
    <section
       id="how-it-works"
       className="mx-auto max-w-7xl scroll-mt-24 px-6 py-24"
    >
      <div className="text-center">
        <p className="text-cyan-400 font-semibold uppercase tracking-widest">
          HOW IT WORKS
        </p>

        <h2 className="mt-4 text-4xl font-bold">
          Four simple steps to better decisions
        </h2>

        <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
          LifeLens combines AI reasoning, memory and personalized guidance to
          help you make life-changing decisions with confidence.
        </p>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((step) => (
          <div
            key={step.title}
            className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 transition hover:border-cyan-500"
          >
            <step.icon className="h-10 w-10 text-cyan-400" />

            <h3 className="mt-6 text-xl font-semibold">{step.title}</h3>

            <p className="mt-3 text-slate-400 leading-7">
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}