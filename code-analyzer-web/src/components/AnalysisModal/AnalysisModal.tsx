type Props = {
  analysis: any;
  onClose: () => void;
};

const AnalysisModal = ({ analysis, onClose }: Props) => {
  if (!analysis) {
    return null;
  }

  return (
    <div
      className="
        fixed
        inset-0
        z-50
        flex
        items-center
        justify-center
        bg-black/50
      "
    >
      <div
        className="
          max-h-[90vh]
          w-full
          max-w-4xl
          overflow-y-auto
          rounded-xl
          bg-white
          p-6
        "
      >
        <div
          className="
            mb-6
            flex
            justify-between
          "
        >
          <h2
            className="
              text-2xl
              font-bold
            "
          >
            {analysis.instruction}
          </h2>

          <button onClick={onClose}>Close</button>
        </div>

        <h3
          className="
            mb-2
            font-semibold
          "
        >
          Original Content
        </h3>

        <pre
          className="
            mb-6
            overflow-x-auto
            rounded
            bg-slate-900
            p-4
            text-white
          "
        >
          {analysis.content}
        </pre>

        <h3
          className="
            mb-2
            font-semibold
          "
        >
          Explanation
        </h3>

        <p className="mb-6">{analysis.result?.explanation}</p>

        <h3
          className="
            mb-2
            font-semibold
          "
        >
          Issues
        </h3>

        <ul className="mb-6">
          {analysis.result?.issues?.map((issue: any, index: number) => (
            <li key={index}>
              {issue.title} ({issue.severity})
            </li>
          ))}
        </ul>

        <h3
          className="
            mb-2
            font-semibold
          "
        >
          Improvements
        </h3>

        {analysis.result?.improvements?.map(
          (improvement: any, index: number) => (
            <div key={index} className="mb-6">
              <h4
                className="
                  font-medium
                "
              >
                {improvement.title}
              </h4>

              <p>{improvement.explanation}</p>

              {improvement.snippet && (
                <pre
                  className="
                    mt-2
                    overflow-x-auto
                    rounded
                    bg-slate-900
                    p-4
                    text-white
                  "
                >
                  {improvement.snippet}
                </pre>
              )}
            </div>
          ),
        )}
      </div>
    </div>
  );
};

export default AnalysisModal;
