
export default function ItemForm({ item, setItem,addItem ,isEdit}) {
  return (
    <form className='flex flex-wrap  gap-4 justify-center' onSubmit={addItem}>
      <input
        onChange={(e) => setItem(e.target.value)}
        type='text'
        className=' outline-0 rounded-md py-2 px-3 text-xl py-4 w-full sm:max-w-lg text-gray-700'
        value={item}
        placeholder='Item'
      />
      <button className='bg-gray-600 py-3 px-8 rounded-md font-bold'>
        
        {isEdit.check ? "Edit":"Add"}
      </button>
    </form>
  );
}
