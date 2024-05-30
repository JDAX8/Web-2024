import React from 'react'

export const Button = ({title, onClick, className, onChange}) => {
    return (
        <button
            className={`border-none rounded-3xl bg-gradient-to-r from-[#BE7DDD] to-violet-200 text-black w-fit px-10 hover:text-white h-fit font-semibold ${className}`}
            value={title}
            onClick={onClick}
            onChange={onChange}
        >
        {title}
        </button>
    )
}