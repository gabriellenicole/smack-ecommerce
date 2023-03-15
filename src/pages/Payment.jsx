import React from 'react'
import Cart from '../components/Cart'
import { useCart } from '../hooks/useCart'
import { smackAxios } from '../api'
import { useUser } from '../hooks/useUser'

export default function Login() {
  const { currentCart, updateCart } = useCart
  const { currentUser } = useUser

  const deleteApiCall = async (listingId) => {
    const response = await smackAxios.delete(
      `api/help?listing_id=${listingId}&user_id=${currentUser.userId}`
    )
    updateCart(response.data)
  }

  const handlePayment = () => {
    currentCart?.map((item) => {
      deleteApiCall(item.listing_id)
    })
  }

  return (
    <div className='h-[770px] w-screen items-center flex justify-center gap-x-16 bg-beige'>
      <div className='bg-white p-10 rounded-lg shadow-md w-2/5 h-[600px]'>
        <Cart />
      </div>
      <div className='bg-white flex flex-col items-center justify-center gap-y-4 shadow-md p-9 rounded-lg py-20'>
        <p className='font-medium text-xl'>Scan to Pay</p>
        <img
          className='w-80'
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1200px-QR_code_for_mobile_English_Wikipedia.svg.png'
        ></img>
        <button
          onClick={handlePayment}
          className='button-class bg-orange p-3 rounded-lg text-white font-medium'
        >
          Payment Finished
        </button>
      </div>
    </div>
  )
}
