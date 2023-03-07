import React from 'react'

export default function CheckboxInput({ label, tag, type, name }) {
  return (
    <div className='flex items-center my-2'>
      <input
        id={tag}
        type={type}
        value={tag}
        className='w-4 h-4 accent-gray'
        name={name ? name : ''}
      />
      <label htmlFor={tag} className='ml-2'>
        {label}
      </label>
    </div>
  )
}
