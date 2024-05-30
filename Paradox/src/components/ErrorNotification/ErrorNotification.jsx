import React, { useState } from 'react';

export function ErrorNotification({ message='', onClick}){
  const [isVisible, setIsVisible] = useState(true);

  const handleOnClick = () => {
    setIsVisible(false)
    onClick()
  }

  if (!isVisible) return null;

  return (
    <div className="fixed top-4 right-4 bg-red-500 text-white p-4 rounded shadow-lg flex items-start z-50">
      <div className="mr-4">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 cursor-pointer z-0" onClick={ handleOnClick}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
      </div>
      <div className="flex-grow">
        {message}
      </div>
    </div>
  );
};

export default ErrorNotification;
