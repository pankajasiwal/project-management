import React, { useState } from 'react';

export default function NewTask({ onAdd }) {
  const [enteredTask, setEnteredTask] = useState('');

  function handleClick() {
    if (enteredTask.trim() === '') {
      return;
    }
    onAdd(enteredTask);
    setEnteredTask('');
  }
  return (
    <div className='flex items-center gap-4'>
      <input
        type='text'
        onChange={(event) => setEnteredTask(event.target.value)}
        value={enteredTask}
        className='w-64 px-2 py-1 rounded-sm bg-stone-200 focus:outline-none focus:border-b-2 focus:border-stone-500 text-stone-700 capitalize'
      />
      <button className='text-stone-700 hover:text-stone-950' onClick={handleClick}>
        Add Task
      </button>
    </div>
  );
}
