import { useState } from "react";

import { analyze } from "../api/analysis";

import CodeInput from "../components/CodeInput/CodeInput";

import AnalysisResult from "../components/AnalysisResult/AnalysisResult";

import InstructionInput from "../components/InstructionInput/InstructionInput";

const AnalysisPage = () => {
   const [instruction, setInstruction] =
  useState(
    "Review this code and suggest improvements."
  );

  const [content, setContent] = useState("");

  const [loading, setLoading] = useState(false);

  const [result, setResult] = useState(null);

  const [error, setError] =
  useState("");

  async function handleAnalyze() {
    setLoading(true);

    try {
      setError("");

const response =
  await analyze(
    instruction,
    content
  );

if (response.error) {
  setError(response.error);
  setResult(null);
  return;
}

setResult(response);
    } finally {
      setLoading(false);
    }
  }

  const isAnalyzeDisabled =
  !instruction.trim() ||
  !content.trim() ||
  loading;

  return (
  <div className="min-h-screen bg-slate-950 text-slate-100">
    <div className="mx-auto max-w-7xl px-6 py-10">
      <div className="mb-8">
        <h1 className="text-4xl font-bold">
          Developer Copilot
        </h1>

        <p className="mt-2 text-slate-400">
          Analyze React, TypeScript, GraphQL and
          error messages using AI.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Left Panel */}
        <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
          <div className="mb-4">
            <label className="mb-2 block text-sm font-medium">
              Instruction
            </label>

            <InstructionInput
  value={instruction}
  onChange={setInstruction}
/>
          </div>

          <div className="mb-4">
            <label className="mb-2 block text-sm font-medium">
              Code / Content
            </label>

            <CodeInput
              value={content}
              onChange={setContent}
            />
          </div>

          <button
  onClick={handleAnalyze}
  disabled={isAnalyzeDisabled}
  className={`
  w-full
  rounded-lg
  px-4
  py-3
  font-medium
  transition
  ${
    isAnalyzeDisabled
      ? "cursor-not-allowed bg-slate-700 text-slate-400"
      : "bg-blue-600 hover:bg-blue-500"
  }
`}
>
  {loading
    ? "Analyzing..."
    : "Analyze"}
</button>
{!instruction.trim() && (
  <p className="mt-2 text-sm text-red-400">
    Enter an instruction.
  </p>
)}

{instruction.trim() &&
 !content.trim() && (
  <p className="mt-2 text-sm text-red-400">
    Enter some code to analyze.
  </p>
)}
        </div>

        {/* Right Panel */}
        <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
          {error && (
  <div
    className="
      mb-4
      rounded-lg
      border
      border-red-500/30
      bg-red-500/10
      p-4
      text-red-300
    "
  >
    {error}
  </div>
)}
          <h2 className="mb-4 text-xl font-semibold">
            Analysis Result
          </h2>

          {loading ? (
            <div className="text-slate-400">
              Thinking...
            </div>
          ) : (
            <AnalysisResult
              result={result}
            />
          )}
        </div>
      </div>
    </div>
  </div>
);
};

export default AnalysisPage;