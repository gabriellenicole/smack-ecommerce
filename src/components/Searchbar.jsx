import React from 'react'
import { FiSearch } from 'react-icons/fi'

export default function Searchbar() {
  return (
    <div>
      <label className='relative block'>
        <span className='absolute inset-y-0 left-0 flex items-center pl-6 pt-6'>
          <FiSearch size={'1.5rem'} className='opacity-50 stroke-black' />
        </span>
      </label>
      <input
        type='text'
        placeholder='Search product'
        className='pl-16 font-normal block bg-black bg-opacity-5 w-96 h-12 placeholder-black placeholder-opacity-50 px-10 rounded-full'
      />
    </div>
  )
}
