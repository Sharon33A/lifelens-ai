"use client";

interface Props {
  actionPlan: string[];
}

export default function ActionPlan({
  actionPlan,
}: Props) {
  return (
    <section className="mt-16 rounded-3xl border border-emerald-500/30 bg-emerald-500/10 p-8">

      <div className="flex items-center gap-3">

        <span className="text-4xl">🚀</span>

        <div>

          <h2 className="text-3xl font-bold">
            One Small Step Today
          </h2>

          <p className="mt-1 text-emerald-200">
            Small actions create better futures.
          </p>

        </div>

      </div>

      <div className="mt-8 space-y-5">

        {actionPlan.map((step, index) => (

          <div
            key={index}
            className="flex gap-4 rounded-2xl bg-slate-900 p-5"
          >

            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500 font-bold text-slate-950">

              {index + 1}

            </div>

            <p className="flex-1 leading-8 text-slate-300">

              {step}

            </p>

          </div>

        ))}

      </div>

    </section>
  );
}