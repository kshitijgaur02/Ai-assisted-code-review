import { useState } from "react";

type Props = {
  code: string;
};

const SnippetCard = ({ code }: Props) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div
      className="
        overflow-hidden
        rounded-lg
        border
      "
    >
      <div
        className="
          flex
          items-center
          justify-between
          border-b
          bg-gray-100
          px-4
          py-2
        "
      >
        <span
          className="
            text-sm
            font-medium
          "
        >
          Suggested Fix
        </span>

        <button
          onClick={handleCopy}
          className="
            rounded
            bg-blue-600
            px-3
            py-1
            text-sm
            text-white
            hover:bg-blue-700
          "
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>

      <pre
        className="
          overflow-x-auto
          bg-slate-900
          p-4
          text-sm
          text-slate-100
        "
      >
        <code>{code}</code>
      </pre>
    </div>
  );
};

export default SnippetCard;
