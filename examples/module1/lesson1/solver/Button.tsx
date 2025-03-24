export default function Button(props: {
  handleClick: () => void;
  children: string;
}) {
  const { handleClick, children } = props;
  return (
    <button
      className="bg-blue-200 px-2 py-4 text-lg hover:bg-blue-500 hover:text-white rounded-md"
      onClick={handleClick}
    >
      {children}
    </button>
  );
}
