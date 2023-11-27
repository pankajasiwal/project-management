import React, { useRef } from 'react';
import Input from './Input';
import Modal from './Modal';

export default function NewProject({ onAdd, onCancel }) {
  const modal = useRef();
  const titleRef = useRef();
  const descRef = useRef();
  const dateRef = useRef();

  const handleSave = () => {
    const titleValue = titleRef.current.value;
    const descValue = descRef.current.value;
    const dateValue = dateRef.current.value;

    if (titleValue.trim() === '' || descValue.trim() === '' || dateValue.trim() === '') {
      console.log('error');
      modal.current.open();
      return;
    }

    onAdd({
      title: titleValue,
      description: descValue,
      date: dateValue,
    });
  };

  return (
    <>
      <Modal ref={modal} buttonCaption='okay'>
        <h2 className='text-xl font-bold text-stone-800 my-4'>Invalid Input</h2>
        <p className='text-stone-700 mb-4'>oops....Its looks like you forget the value</p>
        <p className='text-stone-700 mb-4'>Kindly fill the value</p>
      </Modal>
      <div className='w-[35rem] mt-16'>
        <menu className='flex justify-end items-center gap-4 my-4'>
          <li>
            <button className='text-stone-800 hover:text-stone-900' onClick={onCancel}>
              Cancel
            </button>
          </li>
          <li>
            <button className='px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-900' onClick={handleSave}>
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input label='Title' type='text' ref={titleRef} />
          <Input label='Description' textarea={true} ref={descRef} />
          <Input label='Due Date' type='date' ref={dateRef} />
        </div>
      </div>
    </>
  );
}
