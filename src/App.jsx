import { useState } from 'react';
import NewProject from './component/NewProject';
import NoProjectSelected from './component/NoProjectSelected';
import ProjectsSidebar from './component/ProjectsSidebar';
import SelectedProject from './component/SelectedProject';

function App() {
  const [projectStatus, setProjectStatus] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  function handleAddTask(text) {
    setProjectStatus((prevState) => {
      const taskId = Math.random();
      const newTask = {
        text: text,
        projectId: prevState.selectedProjectId,
        id: taskId,
      };

      return {
        ...prevState,
        tasks: [...prevState.tasks, newTask],
      };
    });
  }

  function handleDeleteTask(id) {
    console.log(id);
    setProjectStatus((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== id),
      };
    });
  }

  function handleStartAddProject() {
    setProjectStatus((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  function handleAddProject(projectData) {
    setProjectStatus((prevState) => {
      const selectedId = Math.random();
      const newProject = {
        ...projectData,
        id: selectedId,
      };

      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  function handleSelectedProject(id) {
    console.log(id);
    setProjectStatus((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });
  }

  function handleDeleteProject() {
    setProjectStatus((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter((project) => project.id !== prevState.selectedProjectId),
      };
    });
  }

  const selectedProject = projectStatus.projects.find((project) => project.id === projectStatus.selectedProjectId);

  let content = (
    <SelectedProject
      project={selectedProject}
      deleteProject={handleDeleteProject}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      tasks={projectStatus.tasks}
    />
  );

  if (projectStatus.selectedProjectId === null) {
    content = (
      <NewProject
        onAdd={handleAddProject}
        onCancel={() =>
          setProjectStatus((prevState) => {
            return { ...prevState, selectedProjectId: undefined };
          })
        }
      />
    );
  } else if (projectStatus.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }
  // console.log(projectStatus);
  return (
    <main className='h-screen my-8 flex gap-8'>
      <ProjectsSidebar
        onStartAddProject={handleStartAddProject}
        projects={projectStatus.projects}
        onSelectProject={handleSelectedProject}
        selectedProjectId={projectStatus.selectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;
