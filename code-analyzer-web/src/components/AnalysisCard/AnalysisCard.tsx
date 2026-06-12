type Props = {
  analysis: any;
  onClick: () => void;
};

const AnalysisCard = ({ analysis, onClick }: Props) => {
  const issueCount = analysis.result?.issues?.length ?? 0;

  const improvementCount = analysis.result?.improvements?.length ?? 0;

  return (
    <button
      onClick={onClick}
      className="
        w-full
        rounded-xl
        border
        bg-white
        p-5
        text-left
        shadow-sm
        transition
        hover:shadow-md
      "
    >
      <h3 className="font-medium">{analysis.instruction}</h3>

      <p
        className="
          mt-2
          text-sm
          text-gray-500
        "
      >
        {new Date(analysis.createdAt).toLocaleString()}
      </p>

      <div
        className="
          mt-4
          flex
          gap-4
          text-sm
        "
      >
        <span>{issueCount} Issues</span>

        <span>{improvementCount} Improvements</span>
      </div>
    </button>
  );
};

export default AnalysisCard;
