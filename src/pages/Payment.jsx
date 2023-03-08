import React from 'react'
import Cart from '../components/Cart'

export default function Login() {
  return (
    <div className='h-[770px] w-screen items-center flex justify-center gap-x-16 bg-beige'>
      <div className='bg-white p-10 rounded-lg shadow-md'>
        <Cart />
      </div>
      <div className='bg-white flex flex-col items-center justify-center gap-y-4 shadow-md p-9 rounded-lg py-20'>
        <p className='font-medium text-xl'>Scan to Pay</p>
        <img
          className='w-80'
          src='https://www.freepnglogos.com/uploads/qr-code-png/qr-code-file-bangla-mobile-code-0.png'
        ></img>
        <button className='button-class bg-orange p-3 rounded-lg text-white font-medium'>
          Payment Finished
        </button>
      </div>
    </div>
  )
}
