import React from 'react'

export default function Sidebar() {
  return (
    <div className='flex flex-col p-8 rounded-lg gap-y-3 border-2 border-opacity-10 shadow-sm border-black w-56'>
      <h2 className='text-lg font-semibold mb-3'>Filter</h2>
      <h3 className='font-medium'>Categories</h3>
      <div className='flex items-center mb-4 gap-y-3'>
        <form>
          <div className='flex items-center my-2'>
            <input
              id='cookieDough-checkbox'
              type='checkbox'
              value='cookieDough'
              className='w-4 h-4 accent-orange'
            />
            <label htmlFor='cookieDough-checkbox' className='ml-2'>
              Cookie Dough
            </label>
          </div>
          <div className='flex items-center my-2'>
            <input
              id='cookies-checkbox'
              type='checkbox'
              value='cookies'
              className='w-4 h-4 accent-orange'
            />
            <label htmlFor='cookies-checkbox' className='ml-2'>
              Cookies
            </label>
          </div>
          <div className='flex items-center my-2'>
            <input
              id='chips-checkbox'
              type='checkbox'
              value='chips'
              className='w-4 h-4 accent-orange'
            />
            <label htmlFor='chips-checkbox' className='ml-2'>
              Chips
            </label>
          </div>
          <div className='flex items-center my-2'>
            <input
              id='driedFruit-checkbox'
              type='checkbox'
              value='driedFruit'
              className='w-4 h-4 accent-orange'
            />
            <label htmlFor='driedFruit-checkbox' className='ml-2'>
              Dried Fruit
            </label>
          </div>
        </form>
      </div>
    </div>
  )
}
