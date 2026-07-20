"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Mic } from "lucide-react";

import { Button } from "@/components/ui/button";

import LangSelect from "./LangSelect";
import VoiceToggle from "./VoiceToggle";
import OutcomeSelector from "./OutcomeSelector";
import InfluenceSelector from "./InfluenceSelector";
import DocumentUpload from "./DocumentUpload";

import { updateSession } from "@/lib/session";

export default function StoryForm() {
  const router = useRouter();

  const [inputLanguage, setInputLanguage] = useState("English");
  const [outputLanguage, setOutputLanguage] = useState("English");

  const [story, setStory] = useState("");

  const [desiredOutcomes, setDesiredOutcomes] = useState<string[]>([]);
  const [decisionInfluences, setDecisionInfluences] = useState<string[]>([]);

  const [loading, setLoading] = useState(false);

  const [inputMethod, setInputMethod] =
    useState<"type" | "voice">("type");

  async function handleContinue() {
    if (!story.trim()) {
      alert("Please describe your situation.");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch("/api/ai/followup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          story,
          desiredOutcomes,
          decisionInfluences,
          inputLanguage,
          outputLanguage,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Something went wrong.");
      }

      updateSession({
        story,
        desiredOutcomes,
        decisionInfluences,
        inputLanguage,
        outputLanguage,
        questions: result.data.questions,
      });

      router.push("/questions");
    } catch (error) {
      console.error(error);
      alert("Unable to generate follow-up questions.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-8 rounded-3xl border border-slate-800 bg-slate-900/40 p-8">

      <div className="grid gap-6 md:grid-cols-2">
        <LangSelect
          title="Input Language"
          value={inputLanguage}
          onChange={setInputLanguage}
        />

        <LangSelect
          title="Output Language"
          value={outputLanguage}
          onChange={setOutputLanguage}
        />
      </div>

      <VoiceToggle
        value={inputMethod}
        onChange={setInputMethod}
      />

      <div>
        <label className="mb-3 block text-lg font-semibold">
          Decision Type
        </label>

        <select className="w-full rounded-xl border border-slate-700 bg-slate-950 p-4">
          <option>Education</option>
          <option>Career</option>
          <option>Family</option>
          <option>Relationship</option>
          <option>Finance</option>
          <option>Health</option>
          <option>Business</option>
          <option>Personal</option>
          <option>Community</option>
          <option>Not Sure (AI Detect)</option>
        </select>
      </div>

      <div>
        <label className="mb-3 block text-lg font-semibold">
          Your Story
        </label>

        {inputMethod === "type" ? (
          <textarea
            rows={8}
            value={story}
            onChange={(e) => setStory(e.target.value)}
            placeholder="Describe your situation..."
            className="w-full rounded-xl border border-slate-700 bg-slate-950 p-5 outline-none focus:border-cyan-500"
          />
        ) : (
          <div className="rounded-2xl border border-dashed border-cyan-500 bg-slate-950 p-10 text-center">

            <Mic className="mx-auto h-12 w-12 text-cyan-400" />

            <h3 className="mt-5 text-xl font-semibold">
               Voice AI (Beta)
            </h3>

            <p className="mt-3 text-slate-400">
               Multi-language voice conversations powered by Gnani AI are currently being integrated.
            </p>

            <p className="mt-2 text-sm text-slate-500">
              Planned support:
              <br />
              English • தமிழ் • हिन्दी • తెలుగు • ಕನ್ನಡ • മലയാളം
            </p>

            <Button
              type="button"
              disabled
              className="mt-6"
            >
              Available in Next Update
            </Button>

          </div>
        )}
      </div>

      <OutcomeSelector
        value={desiredOutcomes}
        onChange={setDesiredOutcomes}
      />

      <InfluenceSelector
        value={decisionInfluences}
        onChange={setDecisionInfluences}
      />

      <DocumentUpload />

      <Button
        size="lg"
        className="w-full"
        disabled={loading}
        onClick={handleContinue}
      >
        {loading
          ? "LifeLens is understanding your situation..."
          : "Continue →"}
      </Button>

    </div>
  );
}