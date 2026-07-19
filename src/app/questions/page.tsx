"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { getSession, updateSession } from "@/lib/session";

export default function QuestionsPage() {
  const router = useRouter();

  const session = getSession();

  const [answers, setAnswers] = useState<string[]>(
    new Array(session.questions.length).fill("")
  );

  const [loading, setLoading] = useState(false);

  function updateAnswer(index: number, value: string) {
    const copy = [...answers];
    copy[index] = value;
    setAnswers(copy);
  }

  function selectOption(index: number, option: string) {
    updateAnswer(index, option);
  }

  async function continueToAnalysis() {
    if (answers.some((answer) => answer.trim() === "")) {
      alert("Please answer all the questions.");
      return;
    }

    try {
      setLoading(true);

      updateSession({
        answers,
      });

      const current = getSession();

      const response = await fetch("/api/ai/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          story: current.story,
          questions: current.questions,
          answers,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Analysis failed.");
      }

      updateSession({
        analysis: result.data,
      });

      router.push("/analysis");
    } catch (error) {
      console.error(error);
      alert("Unable to generate your LifeLens Report.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-4xl px-6 py-16">

        <h1 className="text-4xl font-bold">
          Tell us a little more
        </h1>

        <p className="mt-3 text-slate-400">
          Choose an option or write your own thoughts.
        </p>

        <div className="mt-10 space-y-8">
          {session.questions.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
            >
              <h2 className="text-lg font-semibold">
                {index + 1}. {item.question}
              </h2>

              <div className="mt-5 flex flex-wrap gap-3">
                {item.options.map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() =>
                      selectOption(index, option)
                    }
                    className={`rounded-full border px-4 py-2 text-sm transition ${
                      answers[index] === option
                        ? "border-cyan-400 bg-cyan-500/20 text-cyan-300"
                        : "border-slate-700 hover:border-cyan-400"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>

              <textarea
                rows={3}
                value={answers[index]}
                onChange={(e) =>
                  updateAnswer(index, e.target.value)
                }
                placeholder="Or type your own answer..."
                className="mt-5 w-full rounded-xl border border-slate-700 bg-slate-950 p-4 outline-none focus:border-cyan-500"
              />
            </div>
          ))}
        </div>

        <Button
          size="lg"
          className="mt-10 w-full"
          onClick={continueToAnalysis}
          disabled={loading}
        >
          {loading
            ? "Generating your LifeLens Report..."
            : "Generate My LifeLens Report"}
        </Button>

      </div>
    </main>
  );
}