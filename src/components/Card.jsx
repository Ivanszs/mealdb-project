import { useState } from 'react'

export default function Card({image, title = 'Unknown Meal', description}) {

    return (
        <div className='bg-gray-800 text-white max-w-sm rounded overflow-hidden shadow-lg m-4'>
            <img className='w-full' src={image} alt='Meal' />
            <div className='px-6 py-4'>
                <div className='font-bold text-xl mb-2'>{title}</div>
                <p className='text-gray-300 text-base'>
                    {description}
                </p> 
            </div>
        </div>
    )
}