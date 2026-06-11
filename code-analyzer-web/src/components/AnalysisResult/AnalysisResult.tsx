import type { AnalysisResult as AnalysisResultType } from "../../types/analysis";

interface Props {
  result: AnalysisResultType | null;
}

export default function AnalysisResult({
  result,
}: Props) {
  if (!result) {
    return (
      <p className="text-slate-500">
        Run an analysis to see results.
      </p>
    );
  }

  return (
    <div className="space-y-8">
      {/* Explanation */}
      <section>
        <h2 className="mb-3 text-xl font-semibold">
          Explanation
        </h2>

        <div className="rounded-lg border border-slate-700 bg-slate-950 p-4">
          <p className="text-slate-300">
            {result.explanation}
          </p>
        </div>
      </section>

      {/* Issues */}
      <section>
        <h2 className="mb-3 text-xl font-semibold">
          Issues
        </h2>

        {result.issues.length === 0 ? (
          <p className="text-slate-500">
            No issues found.
          </p>
        ) : (
          <div className="space-y-3">
            {result.issues.map((issue, index) => (
              <div
                key={`${issue.title}-${index}`}
                className="rounded-lg border border-slate-700 bg-slate-950 p-4"
              >
                <div className="flex items-center justify-between">
                  <p className="font-medium">
                    {issue.title}
                  </p>

                  <span
                    className={`rounded px-2 py-1 text-xs font-semibold ${
                      issue.severity === "high"
                        ? "bg-red-500/20 text-red-300"
                        : issue.severity === "medium"
                        ? "bg-yellow-500/20 text-yellow-300"
                        : "bg-green-500/20 text-green-300"
                    }`}
                  >
                    {issue.severity.toUpperCase()}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Improvements */}
      <section>
        <h2 className="mb-3 text-xl font-semibold">
          Improvements
        </h2>

        {result.improvements.length === 0 ? (
          <p className="text-slate-500">
            No improvements suggested.
          </p>
        ) : (
          <div className="space-y-4">
            {result.improvements.map(
              (improvement, index) => (
                <div
                  key={`${improvement.title}-${index}`}
                  className="rounded-lg border border-slate-700 bg-slate-950 p-4"
                >
                  <h3 className="font-semibold">
                    {improvement.title}
                  </h3>

                  <p className="mt-2 text-slate-300">
                    {improvement.explanation}
                  </p>

                  {improvement.snippet && (
                    <>
                      <pre className="mt-4 overflow-auto rounded-lg bg-slate-900 p-4 text-sm">
                        <code>
                          {improvement.snippet}
                        </code>
                      </pre>

                      <button
                        onClick={() =>
                          navigator.clipboard.writeText(
                            improvement.snippet
                          )
                        }
                        className="mt-3 rounded-lg bg-blue-600 px-3 py-2 text-sm font-medium hover:bg-blue-500"
                      >
                        Copy Snippet
                      </button>
                    </>
                  )}
                </div>
              )
            )}
          </div>
        )}
      </section>
    </div>
  );
}