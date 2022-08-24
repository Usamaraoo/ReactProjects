import { useGlobalBarContext } from './context';

export default function Modal() {
  const { isModalOpen, closeModal } = useGlobalBarContext();

  return (
    <>
      {isModalOpen && (
        <div
          className='fixed   w-full h-full   flex flex-col justify-center '
          style={
            isModalOpen && {
              visibility: 'visible',
              zIndex: 10,
              background: 'rgba(0, 0, 0, 0.5)',
            }
          }
        >
          {/* Modal Container */}
          <div className={`shadow-xl p-10 w-2/5 mx-auto bg-white`}>
            <div className=' flex justify-between'>
              <div></div>
              <svg
                onClick={closeModal}
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='red'
                strokeWidth='2'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </div>
            <p className='text-2xl'>Model Content</p>
          </div>
        </div>
      )}
    </>
  );
}
