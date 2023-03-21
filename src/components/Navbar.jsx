import React, { useState } from 'react'
import { BiCart, BiLogOut, BiUser } from 'react-icons/bi'
import Logo from './Logo'
import Cart from './Cart'
import { useUser } from '../hooks/useUser'
import { useCart } from '../hooks/useCart'

export default function Navbar() {
  const { showCart, toggleCart } = useCart()
  const { currentUser, logout } = useUser()
  const { currentCart } = useCart()

  const handleLogout = () => {
    localStorage.removeItem('user')
    localStorage.removeItem('password')
    localStorage.removeItem('userId')
    logout()
    if (showCart) toggleCart()
  }

  const calculateCartNumber = (cartData) => {
    return cartData.length
  }

  return (
    <div className='px-10 py-5 flex justify-between items-center sticky top-0 bg-white bg-opacity-95'>
      <Logo />
      <div className='flex items-center gap-x-6'>
        <div className='flex items-center space-x-8'>
          <div className='user flex items-center space-x-3'>
            <BiUser size='2rem' />
            <h2 className='text-lg'>{currentUser?.username}</h2>
          </div>
          <div
            onClick={toggleCart}
            className='cart flex items-center space-x-3 cursor-pointer relative'
          >
            <BiCart size='2rem' />
            <span className='absolute text-sm right-9 top-[-1px] text-white bg-orange self-center rounded-full w-5 h-5 items-center flex justify-center'>
              {calculateCartNumber(currentCart)}
            </span>
            <h2 className='text-lg'>Cart</h2>
          </div>
          <div onClick={handleLogout} className='flex items-center space-x-3'>
            <BiLogOut size='2rem' />
          </div>
        </div>
      </div>
      {showCart && (
        <div className='absolute right-8 top-24 bg-white shadow-lg rounded-lg p-10 w-[600px] max-h-[700px] flex-col'>
          <Cart page={'navbar'} />
        </div>
      )}
    </div>
  )
}
