import { list } from 'postcss';
import React, { useEffect, useState } from 'react';
import BackButton from '../../components/BackButton';
import Alert from './Alert';
import ItemForm from './ItemForm';
import SingleItem from './SingleItem';

// check if local storage exist if not return empty []
const getLocalStorage = () => {
  let list = localStorage.getItem('list');
  if (list) {
    return JSON.parse(localStorage.getItem('list'));
  } else {
    return [];
  }
};

export default function GroceryBud() {
  const [item, setItem] = useState('');
  const [isEdit, setIsEdit] = useState({ check: false, id: null });
  const [list, setList] = useState(getLocalStorage());
  const [alert, setAlert] = useState({ show: false, color: '', text: '' });
  const showAlert = (show = false, text = '', color = '') => {
    setAlert({ show, text, color });
  };
  const addItem = (e) => {
    e.preventDefault();
    if (item) {
      // Edit existing data
      if (isEdit.check) {
        setList((prev) => {
          prev[isEdit.id] = item;
          return prev;
        });
        setIsEdit((prevState) => ({ ...isEdit, check: false }));
        setItem('');
        showAlert(true, 'Item Edited successfully', 'lime');
      }
      // Or Add new Item
      else {
        setList([...list, item]);
        setItem('');
        showAlert(true, 'Item added successfully', 'lime');
      }
    } else {
      setItem('');
      showAlert(true, 'Empty Item', 'red');
    }
  };

  // Changing state if user click item for edit
  const editItem = (index, text) => {
    setItem(text);
    setIsEdit((prevState) => ({ ...isEdit, check: true, id: index }));
  };

  const deleteItem = (val) => {
    const filterItem = list.filter((item) => item !== val);
    setList((prev) => {
      prev = filterItem;
      return prev;
    });
    showAlert(true, 'Item deleted successfully', 'purple');
  };
  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list));
  }, [list]);

  return (
    <div className='min-h-screen bg-stone-700 text-white'>
      <BackButton color='white' />
      {/* Alert */}
      {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}

      <div className='flex justify-center pt-20 gap-2 '>
        <h1 className='text-3xl  font-bold  tracking-widest'>Grocery Bud</h1>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-5 w-5'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          strokeWidth={2}
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z'
          />
        </svg>
      </div>
      {/* Main section */}
      <div className=' p-3 w-4/5 mx-auto md:max-w-2xl mt-16 rounded-md '>
        {/* ADD Form */}
        <ItemForm
          item={item}
          setItem={setItem}
          addItem={addItem}
          isEdit={isEdit}
        />
        {/* List of items */}
        <div className='mt-10 flex flex-col gap-5'>
          {/* Single item */}
          {list &&
            list
              .map((item, index) => {
                return (
                  <div  key={index}>
                    <SingleItem
                      itemText={item}
                      deleteItem={deleteItem}
                      editItem={editItem}
                      index={index}
                    />
                  </div>
                );
              })
              .reverse()}
        </div>
      </div>
    </div>
  );
}
