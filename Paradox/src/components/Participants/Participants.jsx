import React, { useState } from 'react';
import './Participants.css';

export const Participants = ({ nombre, onChange }) => {
    const [selected, setSelected] = useState(false);

    const onSelected = (event) => {
        setSelected(event.target.checked);
        if (onChange) {
            onChange(event.target.checked);
        }
    };

    return (
        <section className='flex flex-row gap-2 p-2'>
            <input 
                type="checkbox" 
                checked={selected} 
                onChange={onSelected} 
                className="appearance-none h-5 w-5 border border-white rounded-full checked:bg-[#BE7DDD] checked:border-[#BE7DDD] focus:outline-none"
            />
            <p className='px-participants-name text-xl flex items-start'>{nombre}</p>
        </section>
    );
};
