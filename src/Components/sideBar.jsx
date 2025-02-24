import Button from "./Button.jsx";
export default function SideBar({
  onAddNewProject,
  projects,
  onSelectProject,
  selectedProjectId,
}) {
  return (
    <aside className=" font-bold mt-4 bg-stone-900 w-1/3 md:w-72 px-6 py-4   rounded-r-xl flex flex-col ">
      <h2 className=" my-1 text-stone-100 bg-slate-900 uppercase text-sm md:text-xl">
        your project
      </h2>

      <div>
        <Button onClick={onAddNewProject}>+ add a project</Button>
      </div>
      <ul>
        {projects.map((prj) => {
          let cssClass =
            " bg-stone-900 hover:text-stone-50 text-left p-2 hover:bg-stone-800";
          if (prj.id === selectedProjectId) {
            cssClass += " bg-stone-800 text-stone-200";
          } else {
            cssClass = " text-stone-400";
          }
          return (
            <li key={prj.id}>
              <button
                className={cssClass}
                onClick={() => onSelectProject(prj.id)}
              >
                {prj.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
