import React, { useState } from 'react'
import { BiCart, BiUser } from 'react-icons/bi'
import Logo from './Logo'
import Searchbar from './Searchbar'
import Cart from './Cart'

export default function Navbar() {
  const [openCart, setOpenCart] = useState(true)
  return (
    <div className='px-10 py-5 flex justify-between items-center sticky top-0 bg-white bg-opacity-95'>
      <Logo />
      <div className='flex items-center gap-x-6'>
        <Searchbar />
        <div className='flex items-center space-x-8'>
          <div className='user flex items-center space-x-3'>
            <BiUser size='2rem' />
            <h2 className='text-lg'>Aftanza</h2>
          </div>
          <div
            onClick={() => setOpenCart(!openCart)}
            className='cart flex items-center space-x-3 cursor-pointer relative'
          >
            <BiCart size='2rem' />
            <span className='absolute text-sm right-9 top-[-1px] text-white bg-orange self-center rounded-full w-5 h-5 items-center flex justify-center'>
              2
            </span>
            <h2 className='text-lg'>Cart</h2>
          </div>
        </div>
      </div>
      {openCart && <Cart />}
    </div>
  )
}
