export interface Issue {
  title: string;
  severity: "low" | "medium" | "high";
}

export interface Improvement {
  title: string;
  explanation: string;
  snippet: string;
}

export interface AnalysisResult {
  explanation: string;
  issues: Issue[];
  improvements: Improvement[];
  error?: string;
}