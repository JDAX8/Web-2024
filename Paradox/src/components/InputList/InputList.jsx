import React, { useState } from 'react';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';

export function InputList({title, className, name, onSubmit}) {
  const [inputValue, setInputValue] = useState('');
  const [items, setItems] = useState([]);

  const handleInputChange = (e) => {
    setInputValue(e.value);
  };

  const handleAddItem = () => {
    if (inputValue.trim() !== '') {
      const newItems = [...items, inputValue];
      setItems(newItems);
      setInputValue('');
      console.log(newItems);
      onSubmit({name:name, value: newItems});
    }
  };


  return (
    <div className='flex flex-col w-4/6'>
        <div className='flex items-center w-full'>
            <Input  type="text" placeholder={title} name={name} className={className} value={inputValue} onChange={handleInputChange} />
            <Button title={"Agregar"} onClick={handleAddItem}/>
        </div>
      
      <ul className='flex flex-col max-h-28 p-2 overflow-auto'>
        {items.map((item, index) => (
          <li key={index}>{"• " + item}</li>
        ))}
      </ul>
    </div>
  );
};
