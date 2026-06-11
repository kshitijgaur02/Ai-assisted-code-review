interface Props {
  value: string;
  onChange: (
    value: string
  ) => void;
}

export default function InstructionInput({
  value,
  onChange,
}: Props) {
  return (
    <textarea
      rows={4}
      value={value}
      onChange={(e) =>
        onChange(e.target.value)
      }
      placeholder="Review this code like a senior engineer..."
      className="
        w-full
        rounded-lg
        border
        border-slate-700
        bg-slate-950
        p-4
        text-sm
      "
    />
  );
}