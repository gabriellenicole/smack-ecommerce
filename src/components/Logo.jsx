import React from 'react'
import { BiCookie } from 'react-icons/bi'

export default function Logo() {
  return (
    <div>
      <div className='flex items-center space-x-2 '>
        <BiCookie size={'3rem'} color='#FE9800' />
        <h1 className='font-semibold text-3xl bg-gradient-to-r text-transparent bg-clip-text from-orange to-limegreen'>
          Smack.
        </h1>
      </div>
    </div>
  )
}
