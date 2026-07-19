"use client";

interface Props {
  scorecard: {
    career: number;
    finance: number;
    mentalHealth: number;
    family: number;
    growth: number;
  };
}

function Row({
  label,
  value,
}: {
  label: string;
  value: number;
}) {
  return (
    <div className="space-y-2">

      <div className="flex justify-between text-sm font-medium">

        <span>{label}</span>

        <span>{value}/100</span>

      </div>

      <div className="h-3 overflow-hidden rounded-full bg-slate-800">

        <div
          className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-700"
          style={{
            width: `${value}%`,
          }}
        />

      </div>

    </div>
  );
}

export default function DecisionScorecard({
  scorecard,
}: Props) {
  return (
    <section className="mt-16 rounded-3xl border border-slate-800 bg-slate-900 p-8">

      <h2 className="text-3xl font-bold">
        ⚖️ Decision Scorecard
      </h2>

      <p className="mt-3 text-slate-400">
        LifeLens compares important dimensions of your decision.
      </p>

      <div className="mt-8 space-y-8">

        <Row
          label="Career"
          value={scorecard.career}
        />

        <Row
          label="Finance"
          value={scorecard.finance}
        />

        <Row
          label="Mental Health"
          value={scorecard.mentalHealth}
        />

        <Row
          label="Family"
          value={scorecard.family}
        />

        <Row
          label="Growth"
          value={scorecard.growth}
        />

      </div>

    </section>
  );
}