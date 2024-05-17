import React, { useCallback, useState } from 'react';
import debounce from 'just-debounce-it';

export function InputSearch({ handleInputChange }) {
  const [inputValue, setInputValue] = useState('');

  const debounceSome = useCallback(
    debounce((value) => {
      handleInputChange(value);
    }, 500),
    [handleInputChange]
  );

  const handleInput = (e) => {
    const { value } = e.target;
    setInputValue(value);
    debounceSome(value);
  };

  const handleSubmit = () => {
    debounceSome(inputValue);
  };

  return (
    <>
      <div className='flex flex-col w-full py-8 items-center'>
        <div className='flex flex-col'>
          <span className='flex text-gray-400 text-sm justify-start'>Gif query word</span>
          <div className='flex'>
            <input
              className='rounded-l-lg'
              placeholder='Messi, Colombia...'
              onChange={handleInput}
              value={inputValue}
            />
            <button className='rounded-r-lg' onClick={handleSubmit}>Submit</button>
          </div>
        </div>
      </div>
    </>
  );
}
