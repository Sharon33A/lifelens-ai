"use client";

interface Props {
  value: string[];
  onChange: (value: string[]) => void;
}

const influences = [
  "Family Pressure",
  "Financial Concerns",
  "Fear of Failure",
  "Society",
  "Lack of Information",
  "Self Doubt",
  "Time Pressure",
  "Other",
];

export default function InfluenceSelector({
  value,
  onChange,
}: Props) {
  function toggle(item: string) {
    if (value.includes(item)) {
      onChange(value.filter((i) => i !== item));
      return;
    }

    if (value.length >= 4) return;

    onChange([...value, item]);
  }

  return (
    <div>
      <div className="mb-2 flex items-center justify-between">
        <label className="text-lg font-semibold">
          What is influencing your decision?
        </label>

        <span className="text-sm text-slate-400">
          {value.length}/4 selected
        </span>
      </div>

      <div className="flex flex-wrap gap-3">
        {influences.map((item) => {
          const active = value.includes(item);

          return (
            <button
              type="button"
              key={item}
              onClick={() => toggle(item)}
              className={`rounded-full border px-5 py-2 transition ${
                active
                  ? "border-cyan-500 bg-cyan-500/10 text-cyan-300"
                  : "border-slate-700 hover:border-cyan-400"
              }`}
            >
              {item}
            </button>
          );
        })}
      </div>

      <p className="mt-3 text-sm text-slate-500">
        Choose up to 4 factors.
      </p>
    </div>
  );
}