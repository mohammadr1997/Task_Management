import NewTasks from "./NewTasks.jsx";

export default function Tasks({ onAdd, tasks, onDelete }) {
  return (
    <section>
      <h3 className="font-bold text-base md:text-lg">Tasks</h3>
      <NewTasks onAdd={onAdd} />
      {tasks.length === 0 && (
        <p className="text-sm md:text-base">
          This project does not have any tasks yet
        </p>
      )}
      {tasks.length > 0 && (
        <ul>
          {tasks.map((task) => (
            <li
              className="flex justify-between rounded-md my-2 p-2 w-1/4"
              key={task.id}
            >
              <span className="bg-stone-200  px-2 py-1 rounded-md">
                {task.text}
              </span>
              <button
                onClick={() => onDelete(task.id)}
                className="text-stone-600 hover:text-red-600"
              >
                Clear
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
