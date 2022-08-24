import { useGlobalBarContext } from './context';
import { GiHamburgerMenu } from 'react-icons/gi';

export default function SideBarHome() {
  const { openModal, openSideBar } = useGlobalBarContext();

  return (
    <div className='flex flex-col align-center   justify-between min-h-screen'>
      <div className='mt-10 ml-10 cursor-pointer'>
        <GiHamburgerMenu  onClick={openSideBar} size={24} className='text-pink-400'/>
      </div>
      {/* <Modal /> */}

      <button
        onClick={() => openModal()}
        className='bg-pink-400 w-40 text-white font-bold  rounded-md px-6 py-1 mx-auto '
      >
        Open modal
      </button>
      <div></div>
    </div>
  );
}
