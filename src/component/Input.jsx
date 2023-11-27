import React, { forwardRef } from 'react';

export default forwardRef(function Input({ label, textarea, ...props }, ref) {
  const inputsClasses =
    'w-full p-1 capitalize border-b-2 border-stone-300 bg-stone-200 text-stone-600 focus:border-stone-500 focus:outline-none rounded-sm';
  return (
    <p className='flex flex-col gap-1 my-4'>
      <label htmlFor={label} className='text-sm font-bold text-stone-500 uppercase'>
        {label}
      </label>
      {textarea ? (
        <textarea className={inputsClasses} ref={ref} />
      ) : (
        <input className={inputsClasses} {...props} ref={ref} />
      )}
    </p>
  );
});
