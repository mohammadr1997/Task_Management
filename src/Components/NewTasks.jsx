import { useState } from "react";

export default function NewTasks({ onAdd }) {
  const [enteredTask, setEnteredTask] = useState("");
  function handleChange(event) {
    setEnteredTask(event.target.value);
  }
  function handleClick() {
    if (enteredTask.trim() === "") {
      return;
    }
    onAdd(enteredTask);
    setEnteredTask("");
  }
  return (
    <div className="flex items-center mb-2">
      <input
        onChange={handleChange}
        value={enteredTask}
        className="p-2 rounded-md bg-stone-200 "
        type="text"
      />
      <button
        onClick={handleClick}
        className="mx-2 text-stone-500 hover:text-stone-800  "
      >
        Add Tasks
      </button>
    </div>
  );
}
