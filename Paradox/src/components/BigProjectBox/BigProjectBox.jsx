import React from 'react'

export function BigProjectBox ({ onChange, className, src, alt}) {
    return (
        <>
        <div className='w-screen h-screen flex justify-center items-center'>
            <div className="w-3/4 h-3/4 border-2 p-1 rounded-2xl  border-[#BE7DDD] transition ">
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