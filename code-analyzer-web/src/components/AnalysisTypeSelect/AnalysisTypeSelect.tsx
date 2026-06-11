interface Props {
  value: string;
  onChange: (
    value: string
  ) => void;
}

export default function
AnalysisTypeSelect({
  value,
  onChange,
}: Props) {
  return (
    <select
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
    px-3
    py-2
    outline-none
    focus:border-blue-500
  "
>
      <option value="react">
        React
      </option>

      <option value="typescript">
        TypeScript
      </option>

      <option value="graphql">
        GraphQL
      </option>

      <option value="error">
        Error Message
      </option>
    </select>
  );
}