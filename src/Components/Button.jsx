export default function Button({ children, ...props }) {
  return (
    <button
      {...props}
      className=" my-2 text-stone-50 bg-stone-600 px-8 md:px-4 py-1 hover:text-stone-300  rounded text-sm md:text-xl"
    >
      {" "}
      {children}
    </button>
  );
}
