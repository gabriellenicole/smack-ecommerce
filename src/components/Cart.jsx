import React, { useEffect, useState } from 'react'
import { FiTrash } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../hooks/useCart'
import { useUser } from '../hooks/useUser'
import { smackAxios } from '../api'

export default function Cart({ page }) {
  const { toggleCart, currentCart, updateCart } = useCart()
  const { currentUser } = useUser()
  const navigate = useNavigate()

  const calculateTotal = (cartData) => {
    let total = 0
    for (let i = 0; i < cartData.length; i++) {
      const item = cartData[i]
      total += item.price * item.quantity
    }
    return total.toFixed(2)
  }

  const handleClick = () => {
    toggleCart()
    navigate('/payment')
  }

  const handleReset = async () => {
    const response = await smackAxios.delete(
      `api/cart?user_id=${currentUser.userId}&deleteAll=true`
    )
    updateCart(response.data)
  }


  const handleDelete = async (listingId) => {
    await smackAxios.delete(`api/cart?getListingData=true&listing_id=${listingId}&user_id=${currentUser.userId}`)
    const response = await smackAxios.get(`api/cart?getListingData=true&user_id=${currentUser.userId}`)
    updateCart(response.data)
  }



  return (
    <>
      <h1 className='font-semibold text-2xl mb-2'>Your cart</h1>
      {currentCart?.length === 0 && (
        <div className='flex flex-col w-full items-center gap-y-3'>
          <h2>Your cart is empty :(</h2>
          <button
            className='button-class bg-orange text-white ml-auto mr-0'
            onClick={toggleCart}
          >
            Shop Now
          </button>
        </div>
      )}
      {currentCart?.length !== 0 && (
        <div>
          <div className='overflow-auto max-h-[400px] my-7'>
            {currentCart?.map((item) => (
              <div className='flex items-center my-5' key={item.id}>
                <img src={item.image} className='w-36'></img>
                <div className='flex flex-1 flex-col justify-between gap-y-1'>
                  <h1 className='font-semibold mb-2 text-lg'>{item.name}</h1>
                  {/*<p className='opacity-60'>*/}
                  {/*  {item.description.substring(0, 50)}...*/}
                  {/*</p>*/}
                  <div className='text-orange text-lg'>
                    {item.quantity} x ${item.price}
                  </div>
                </div>
                <FiTrash
                  size={20}
                  className='ml-auto stroke-red w-20 cursor-pointer'
                  onClick={() => handleDelete(item.id)}
                />
              </div>
            ))}
          </div>
          <div className='flex justify-between'>
            <span className='font-semibold text-lg'>SUBTOTAL</span>
            <span className='font-semibold text-lg'>
              ${calculateTotal(currentCart)}
            </span>
          </div>
          {page === 'navbar' && (
            <div className='flex justify-between items-end mt-5'>
              <span
                onClick={handleReset}
                className='opacity-70 mb-2 cursor-pointer text-sm text-red'
              >
                Reset Cart
              </span>
              <button
                onClick={handleClick}
                className='button-class bg-orange text-white'
              >
                Proceed to Checkout
              </button>
            </div>
          )}
        </div>
      )}
    </>
  )
}
