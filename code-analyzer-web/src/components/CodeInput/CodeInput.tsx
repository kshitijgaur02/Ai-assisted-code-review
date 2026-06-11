interface Props {
  value: string;
  onChange: (
    value: string
  ) => void;
}

export default function
CodeInput({
  value,
  onChange,
}: Props) {
  return (
    <textarea
  rows={16}
  value={value}
  onChange={(e) =>
    onChange(e.target.value)
  }
  className="
    w-full
    rounded-lg
    border
    border-slate-700
    bg-slate-950
    p-4
    font-mono
    text-sm
    outline-none
    focus:border-blue-500
  "
/>
  );
}