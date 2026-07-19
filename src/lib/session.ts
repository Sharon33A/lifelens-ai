const KEY = "lifelens_session";

export interface AnalysisReport {
  decisionReadiness: number;
  summary: string;

  possiblePaths: {
    title: string;
    tag: string;
    confidence: number;

    timeline: {
      "3months": string;
      "1year": string;
      "5years": string;
    };

    pros: string[];
    cons: string[];
  }[];

  scorecard: {
    career: number;
    finance: number;
    mentalHealth: number;
    family: number;
    growth: number;
  };

  reflection: string;

  actionPlan: string[];
}

export interface LifeLensSession {
  story: string;

  inputLanguage?: string;
  outputLanguage?: string;

  decisionType?: string;

  desiredOutcomes: string[];
  decisionInfluences: string[];

  questions: {
  question: string;
  options: string[];
}[];

  answers: string[];

  analysis?: AnalysisReport;
}

export function getSession(): LifeLensSession {
  if (typeof window === "undefined") {
    return {
      story: "",
      inputLanguage: "",
      outputLanguage: "",
      decisionType: "",
      desiredOutcomes: [],
      decisionInfluences: [],
      questions: [],
      answers: [],
    };
  }

  const raw = sessionStorage.getItem(KEY);

  if (!raw) {
    return {
      story: "",
      inputLanguage: "",
      outputLanguage: "",
      decisionType: "",
      desiredOutcomes: [],
      decisionInfluences: [],
      questions: [],
      answers: [],
    };
  }

  return JSON.parse(raw);
}

export function saveSession(data: LifeLensSession) {
  sessionStorage.setItem(KEY, JSON.stringify(data));
}

export function updateSession(data: Partial<LifeLensSession>) {
  const current = getSession();

  saveSession({
    ...current,
    ...data,
  });
}

export function clearSession() {
  sessionStorage.removeItem(KEY);
}