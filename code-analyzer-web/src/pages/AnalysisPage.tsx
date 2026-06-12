import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

import { analyze } from "../api/analysis";

import PageContainer from "../components/PageContainer/PageContainer";
import InstructionInput from "../components/InstructionInput/InstructionInput";
import CodeInput from "../components/CodeInput/CodeInput";
import AnalysisResult from "../components/AnalysisResult/AnalysisResult";

const AnalysisPage = () => {
  const [instruction, setInstruction] = useState(
    "Review this code and suggest improvements."
  );

  const [content, setContent] = useState("");

  const [loading, setLoading] = useState(false);

  const [result, setResult] = useState(null);

  const [error, setError] = useState("");

  const {
    user,
    getAccessTokenSilently,
  } = useAuth0();

  const handleAnalyze = async () => {
    setLoading(true);

    try {
      setError("");

      const token =
        await getAccessTokenSilently();

      const response =
        await analyze(
          instruction,
          content,
          token,
          user?.email as string
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
  };

  const isAnalyzeDisabled =
    !instruction.trim() ||
    !content.trim() ||
    loading;

  return (
    <PageContainer
      title="Analyze Code"
      subtitle="Paste code and receive AI-powered feedback."
    >
      <div
        className="
          grid
          gap-6
          lg:grid-cols-2
        "
      >
        {/* Input Panel */}

        <div
          className="
            rounded-xl
            border
            bg-white
            p-6
            shadow-sm
          "
        >
          <div className="mb-4">
            <label
              className="
                mb-2
                block
                text-sm
                font-medium
              "
            >
              Instruction
            </label>

            <InstructionInput
              value={instruction}
              onChange={setInstruction}
            />
          </div>

          <div className="mb-4">
            <label
              className="
                mb-2
                block
                text-sm
                font-medium
              "
            >
              Code / Content
            </label>

            <CodeInput
              value={content}
              onChange={setContent}
            />
          </div>

          <button
            onClick={handleAnalyze}
            disabled={
              isAnalyzeDisabled
            }
            className="
              w-full
              rounded-lg
              bg-blue-600
              px-4
              py-3
              font-medium
              text-white
              transition
              hover:bg-blue-700
              disabled:cursor-not-allowed
              disabled:bg-gray-400
            "
          >
            {loading
              ? "Analyzing..."
              : "Analyze Code"}
          </button>

          {!instruction.trim() && (
            <p
              className="
                mt-2
                text-sm
                text-red-500
              "
            >
              Enter an instruction.
            </p>
          )}

          {instruction.trim() &&
            !content.trim() && (
              <p
                className="
                  mt-2
                  text-sm
                  text-red-500
                "
              >
                Enter some code to
                analyze.
              </p>
            )}
        </div>

        {/* Results Panel */}

        <div
          className="
            rounded-xl
            border
            bg-white
            p-6
            shadow-sm
          "
        >
          <h2
            className="
              mb-4
              text-xl
              font-semibold
            "
          >
            Analysis Result
          </h2>

          {error && (
            <div
              className="
                mb-4
                rounded-lg
                border
                border-red-300
                bg-red-50
                p-4
                text-red-700
              "
            >
              {error}
            </div>
          )}

          {loading ? (
            <div
              className="
                text-gray-500
              "
            >
              Thinking...
            </div>
          ) : (
            <AnalysisResult
              result={result}
            />
          )}
        </div>
      </div>
    </PageContainer>
  );
};

export default AnalysisPage;