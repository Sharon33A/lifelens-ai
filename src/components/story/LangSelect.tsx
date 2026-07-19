"use client";

interface Props {
  title: string;
  value: string;
  onChange: (value: string) => void;
}

const languages = [
  "English",
  "தமிழ்",
  "हिन्दी",
  "తెలుగు",
  "ಕನ್ನಡ",
  "മലയാളം",
];

export default function LangSelect({
  title,
  value,
  onChange,
}: Props) {
  return (
    <div>
      <label className="mb-3 block text-lg font-semibold">
        {title}
      </label>

      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border border-slate-700 bg-slate-950 p-4"
      >
        {languages.map((language) => (
          <option key={language} value={language}>
            {language}
          </option>
        ))}
      </select>
    </div>
  );
}