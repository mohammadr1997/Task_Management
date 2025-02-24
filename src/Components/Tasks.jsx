import NewTasks from "./NewTasks.jsx";

export default function Tasks({ onAdd, tasks, onDelete, selectedProjectId }) {
  console.log(selectedProjectId);
  return (
    <section>
      <h3 className="font-bold text-base md:text-lg ">Tasks</h3>
      <NewTasks onAdd={onAdd} />
      {tasks.filter((task) => task.projectId === selectedProjectId).length ===
        0 && (
        <p className="text-sm md:text-base">
          This project does not have any tasks yet
        </p>
      )}
      {tasks
        .filter((task) => task.projectId === selectedProjectId)
        .map((task) => {
          return (
            <li
              className="flex flex-row flex-wrap justify-between rounded-md my-2 p-2 w-1/2 gap-4"
              key={task.id}
            >
              <span className="bg-stone-200  px-4 py-2 rounded-md ">
                {task.text.length > 25 ? (
                  <span className="text-red-500 uppercase font-bold">
                    {" "}
                    the task is too long !! (clear it)
                  </span>
                ) : (
                  task.text
                )}
              </span>
              <button
                onClick={() => onDelete(task.id)}
                className="text-stone-600 hover:text-red-600"
              >
                Clear
              </button>
            </li>
          );
        })}
      {/* {tasks.length > 0 && (
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
      )} */}
    </section>
  );
}
