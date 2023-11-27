import React from 'react';
import Button from './Button';

export default function ProjectsSidebar({ onStartAddProject, projects, onSelectProject, selectedProjectId }) {
  return (
    <aside className='bg-stone-900 text-stone-50 w-1/3 px-8 py-16 md:w-72 rounded-r-xl'>
      <h2 className='mb-8 font-bold uppercase text-stone-200 md:text-xl'>Your Projects</h2>
      <div>
        <Button onClick={onStartAddProject}>+ Add Projects</Button>
      </div>

      <ul className='mt-8'>
        {projects.map((project) => {
          let cssClass = 'w-full py-1 px-4 text-left capitalize hover:text-stone-50 hover:bg-stone-800 my-1';
          if (project.id === selectedProjectId) {
            cssClass += ' bg-stone-800 text-stone-50';
          } else {
            cssClass += ' text-stone-400';
          }
          return (
            <li key={project.id}>
              <button onClick={() => onSelectProject(project.id)} className={cssClass}>
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
