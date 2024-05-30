import React from 'react'
import { Link } from 'react-router-dom';



export const ValuesBox = ({number, text, title}) => {
    return (
            <>
                <div className='w-full cell:w-1/3 flex justifuy-center items-center flex-col cell:p-10'>
                    <div className='relative top-10 w-28 h-28'>
                        <div className='border-8 rounded-full bg-gradient-to-br from-[#BE7DDD] to-purple-500 filter blur h-full'></div>
                            <div className='z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                                <h1 className='font-extrabold text-4xl'>{number}</h1>
                        </div>
                    </div >

                            <div className='w-full h-full flex justifuy-center items-center flex-col border-4 border-[#BE7DDD] px-4'>
                                <h1 className=' break-words pt-10 font-extrabold bg-gradient-to-r from-[#BE7DDD] to-white text-transparent bg-clip-text w-full border-solid bg-clip-border-box text-5xl'>{title}</h1>
                                <p className='text-xl text-center font-light pt-10'>{text}</p>
                            </div>
                </div>
            </>
    )
}