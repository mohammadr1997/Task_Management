import Tasks from "./Tasks.jsx";

export default function SelectedProject({
  project,
  onDelete,
  onAddTask,
  onDeleteTasks,
  tasks,
}) {
  const formattedDate = new Date(project.dueDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  return (
    <div className="w-full">
      <header>
        <div className="flex items-center gap-2 justify-between w-1/3 text-left">
          <h2 className=" text-xl md:text-4xl text-stone-600 font-bold p-2">
            {project.title}
          </h2>
          <button
            onClick={onDelete}
            className="text-stone-600 mx-2 text-base md:text-lg font-bold hover:text-stone-900 text-right "
          >
            Delete
          </button>
        </div>
        <p className="mb-4 text-stone-400">{formattedDate}</p>
        <p className="border-b-2  mb-4 py-4 text-stone-600 whitespace-pre-wrap w-1/4">
          {project.description}
        </p>
      </header>
      <Tasks
        project={project}
        tasks={tasks}
        onAdd={onAddTask}
        onDelete={onDeleteTasks}
      />
    </div>
  );
}
