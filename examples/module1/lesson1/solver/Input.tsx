export default function Input(props: {
  num: number;
  handleChange: (e: any) => void;
}) {
  const { num, handleChange } = props;

  return (
    <input
      type="number"
      className="rounded-md shadow-md p-4"
      value={num}
      onChange={handleChange}
    />
  );
}
