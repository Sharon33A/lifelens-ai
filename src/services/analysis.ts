import { ai } from "@/lib/gemini";
import { ANALYSIS_PROMPT } from "@/lib/prompts";

function cleanJson(text: string) {
  return text
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();
}

export async function generateAnalysis(
  story: string,
  questions: string[],
  answers: string[]
) {
  const prompt = `
${ANALYSIS_PROMPT}

USER STORY

${story}

FOLLOW-UP QUESTIONS

${questions.map((q, i) => `${i + 1}. ${q}`).join("\n")}

USER ANSWERS

${answers.map((a, i) => `${i + 1}. ${a}`).join("\n")}
`;

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });

  const text = response.text;

  if (!text) {
    throw new Error("No response from Gemini.");
  }

  return JSON.parse(cleanJson(text));
}