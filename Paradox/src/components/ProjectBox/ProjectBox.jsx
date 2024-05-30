import React from 'react'

export const ProjectBox = ({ onChange, className, src, alt}) => {
    return (
        <>
        <div className='w-ful'>
            <div className="w-80 h-80 border-2 p-1 rounded-2xl  border-[#BE7DDD] transition duration-500 hover:scale-110">
                <img
                src={src}
                alt={alt}
                className="w-full h-full object-cover rounded-2xl hover:shadow-lg"
                onClick={onChange}
                />
            </div>
        </div>
        
        </>
    )
}