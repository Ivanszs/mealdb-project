import { useState } from 'react'

export default function Card({ meal }) {
  return (
    <div className='bg-gray-800 text-white max-w-sm rounded overflow-hidden shadow-lg m-4'>
      <img className='w-full' src={meal.strMealThumb} alt='Meal' />
      <div className='px-6 py-4'>
        <div className='font-bold text-xl mb-2'>{meal.strMeal}</div>
        <p className='text-gray-300 text-base'>
          {meal.strInstructions?.slice(0, 100)}...
        </p>
      </div>
    </div>
  )
}