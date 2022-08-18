import React, { useEffect } from 'react';

export default function Alert({ text, color, removeAlert,list }) {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 2000);

    return () => clearTimeout(timeout);
  }, [list]);

  return (
    <div
      className={`border text-black bg-${color}-200 px-4 py-2 rounded-md w-4/5 mx-auto md:max-w-xl lg:max-w-sm absolute top-36 left-1/2 transform -translate-x-1/2 -translate-y-1/2 tracking-widest italic text-gray-600`}
    >
      <p>{text}</p>
    </div>
  );
}
