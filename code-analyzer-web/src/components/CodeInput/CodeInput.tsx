type Props = {
  value: string;
  onChange: (
    value: string
  ) => void;
};

const CodeInput = ({
  value,
  onChange,
}: Props) => {
  return (
    <textarea
      value={value}
      onChange={(e) =>
        onChange(e.target.value)
      }
      placeholder="Paste your code here..."
      className="
        h-96
        w-full
        rounded-lg
        border
        bg-white
        p-4
        font-mono
        shadow-sm
        focus:outline-none
        focus:ring-2
        focus:ring-blue-500
      "
    />
  );
};

export default CodeInput;