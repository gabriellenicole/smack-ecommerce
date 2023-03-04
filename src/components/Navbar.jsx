import React from 'react'
import { BiCart, BiUser } from 'react-icons/bi'
import Logo from './Logo'
import Searchbar from './Searchbar'

export default function Navbar() {
  return (
    <div className='px-10 py-5 flex justify-between items-center sticky top-0 bg-white bg-opacity-95'>
      <Logo />
      <div className='flex items-center gap-x-6'>
        <Searchbar />
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
    </div>
  )
}
