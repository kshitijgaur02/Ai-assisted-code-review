type Props = {
  value: string;
  onChange: (
    value: string
  ) => void;
};

const InstructionInput = ({
  value,
  onChange,
}: Props) => {
  return (
    <input
      value={value}
      onChange={(e) =>
        onChange(e.target.value)
      }
      placeholder="What would you like reviewed?"
      className="
        w-full
        rounded-lg
        border
        bg-white
        p-3
        shadow-sm
      "
    />
  );
};

export default InstructionInput;