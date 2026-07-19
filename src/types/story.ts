export type DecisionType =
  | "education"
  | "career"
  | "family"
  | "relationship"
  | "health"
  | "finance"
  | "business"
  | "personal"
  | "community"
  | "other";

export interface StoryFormData {
  inputLanguage: string;
  outputLanguage: string;
  decisionType: DecisionType;
  inputMode: "text" | "voice";
  story: string;
  outcome: string;
  influences: string[];
  document?: File | null;
}