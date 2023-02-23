import React from 'react'
import { BiCart, BiUser } from 'react-icons/bi'
import Logo from './Logo'

export default function Navbar() {
  return (
    <div className='px-10 my-4 flex justify-between '>
      <Logo />
      <div className='flex items-center space-x-8'>
        <div className='user flex items-center space-x-2'>
          <BiUser size='1.5rem' />
          <h2 className='text-lg'>Aftanza</h2>
        </div>
        <div className='cart flex items-center space-x-2'>
          <BiCart size='1.5rem' />
          <h2 className='text-lg'>Cart</h2>
        </div>
      </div>
    </div>
  )
}
