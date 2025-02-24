import { useState } from "react";
import SideBar from "./Components/sideBar.jsx";
import NewProject from "./Components/NewProject.jsx";
import NoProjectSelected from "./Components/NoProjectSelected.jsx";
import SelectedProject from "./Components/SelectedProject.jsx";

export default function App() {
  const [projectState, setProjectState] = useState({
    project: [],
    projectId: 0,
    tasks: [],
  });
  function onAddNewProject() {
    setProjectState((prevProjects) => {
      return {
        ...prevProjects,
        projectId: 1,
      };
    });
  }
  function handleAddProject(projectData) {
    const newProject = {
      ...projectData,
      id: Math.random(),
    };
    setProjectState((prevProjects) => {
      return {
        ...prevProjects,
        projectId: 0,
        project: [...prevProjects.project, newProject],
      };
    });
  }
  function cancelAddNewProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        projectId: 0,
      };
    });
  }
  function handleSelectProject(id) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        projectId: id,
      };
    });
  }

  function handleDeleteProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        projectId: 0,
        project: prevState.project.filter((project) => {
          return project.id !== prevState.projectId;
        }),
      };
    });
  }
  function handleAddTask(task) {
    setProjectState((prevState) => {
      const newTask = {
        text: task,
        projectId: prevState.projectId,
        id: Math.random(),
      };

      return {
        ...prevState,
        tasks: [...prevState.tasks, newTask],
      };
    });
  }
  function handleDeleteTasks(id) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => {
          return task.id !== id;
        }),
      };
    });
  }
  const selectedProject = projectState.project.find(
    (project) => project.id === projectState.projectId
  );
  const selectedProjectId = selectedProject ? selectedProject.id : null;
  let content = (
    <SelectedProject
      onAddTask={handleAddTask}
      onDeleteTasks={handleDeleteTasks}
      project={selectedProject}
      onDelete={handleDeleteProject}
      tasks={projectState.tasks}
    />
  );
  if (projectState.projectId === 0) {
    content = <NoProjectSelected onAddNewProject={onAddNewProject} />;
  } else if (projectState.projectId === 1) {
    content = (
      <NewProject onAdd={handleAddProject} onCancel={cancelAddNewProject} />
    );
  }
  return (
    <main className="h-screen  flex gap-8">
      <SideBar
        onAddNewProject={onAddNewProject}
        projects={projectState.project}
        onSelectProject={handleSelectProject}
        selectedProjectId={selectedProjectId}
      />
      {content}
    </main>
  );
}
