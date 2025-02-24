import { forwardRef } from "react";
const Input = forwardRef(function Input({ label, textarea, ...props }, ref) {
  const classes =
    "bg-stone-200 border-b-2 border-stone-300 rounded-md p-2 focus:outline-none focus:border-stone-600";
  return (
    <p className="w-full p-4 flex flex-col gap-6">
      <label className="text-xs font-bold md:text-lg uppercase text-stone-900 p-1">
        {label}
      </label>
      {textarea ? (
        <textarea ref={ref} className={classes} {...props} />
      ) : (
        <input ref={ref} className={classes} {...props} />
      )}
    </p>
  );
});
export default Input;
