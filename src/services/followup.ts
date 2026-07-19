import { ai } from "@/lib/gemini";
import { FOLLOWUP_PROMPT } from "@/lib/prompts";

interface FollowupInput {
  story: string;
  desiredOutcomes?: string[];
  decisionInfluences?: string[];
}

export async function generateFollowupQuestions({
  story,
  desiredOutcomes = [],
  decisionInfluences = [],
}: FollowupInput) {
  const prompt = `
${FOLLOWUP_PROMPT}

USER STORY
${story}

Desired Outcomes:
${desiredOutcomes.join(", ") || "Not specified"}

Decision Influences:
${decisionInfluences.join(", ") || "Not specified"}

Generate follow-up questions based on ALL the above information.
`;

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });

  const text = response.text;

  if (!text) {
    throw new Error("No response from Gemini.");
  }

  const cleanText = text
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();

  return JSON.parse(cleanText);
}