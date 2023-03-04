import React from 'react'

export default function CheckboxInput({ label, tag }) {
  return (
    <div className='flex items-center my-2'>
      <input
        id={tag}
        type='checkbox'
        value={tag}
        className='w-4 h-4 accent-orange'
      />
      <label htmlFor={tag} className='ml-2'>
        {label}
      </label>
    </div>
  )
}
