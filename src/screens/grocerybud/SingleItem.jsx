import React, { useEffect } from 'react';

export default function SingleItem({ itemText, deleteItem, editItem, index }) {

  return (
    <div
      className={`bg-gray-600 px-4 py-3 flex rounded-md 
      justify-between transition ease-in-out delay-150  hover:-translate-y-1
       hover:scale-105 hover:bg-indigo-500 duration-400 `}
    >
      <p>{itemText}</p>
      {/* Delete update icons */}
      <div className='flex gap-3'>
        <svg
          onClick={() => editItem(index, itemText)}
          xmlns='http://www.w3.org/2000/svg'
          className='h-5 w-5 cursor-pointer'
          viewBox='0 0 20 20'
          fill='currentColor'
        >
          <path d='M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z' />
          <path
            fillRule='evenodd'
            d='M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z'
            clipRule='evenodd'
          />
        </svg>
        <svg
          onClick={() => deleteItem(itemText)}
          xmlns='http://www.w3.org/2000/svg'
          className='h-5 w-5 cursor-pointer'
          viewBox='0 0 20 20'
          fill='currentColor'
        >
          <path
            fillRule='evenodd'
            d='M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm1 8a1 1 0 100 2h6a1 1 0 100-2H7z'
            clipRule='evenodd'
          />
        </svg>
      </div>
    </div>
  );
}
