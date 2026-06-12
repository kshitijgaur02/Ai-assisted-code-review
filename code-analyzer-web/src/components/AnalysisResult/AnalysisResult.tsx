import SnippetCard from "../SnippetCard/SnipperCard";

type Props = {
  result: any;
};

const AnalysisResult = ({ result }: Props) => {
  if (!result) {
    return null;
  }

  if (result.error) {
    return (
      <div
        className="
          rounded-lg
          border
          border-red-300
          bg-red-50
          p-4
        "
      >
        {result.error}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <section
        className="
          rounded-lg
          border
          bg-white
          p-5
        "
      >
        <h2 className="mb-2 text-xl font-semibold">Explanation</h2>

        <p>{result.explanation}</p>
      </section>

      <section
        className="
          rounded-lg
          border
          bg-white
          p-5
        "
      >
        <h2 className="mb-4 text-xl font-semibold">Issues</h2>

        <div className="space-y-3">
          {result.issues?.map((issue: any, index: number) => (
            <div
              key={index}
              className="
                  rounded
                  border
                  p-3
                "
            >
              <p className="font-medium">{issue.title}</p>

              <p className="text-sm text-gray-500">
                Severity: {issue.severity}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        className="
          rounded-lg
          border
          bg-white
          p-5
        "
      >
        <h2 className="mb-4 text-xl font-semibold">Improvements</h2>

        <div className="space-y-4">
          {result.improvements?.map((improvement: any, index: number) => (
            <div
              key={index}
              className="
                  rounded
                  border
                  p-4
                "
            >
              <h3 className="font-medium">{improvement.title}</h3>

              <p className="mt-2">{improvement.explanation}</p>

              {improvement.snippet && (
                <SnippetCard code={improvement.snippet} />
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AnalysisResult;
