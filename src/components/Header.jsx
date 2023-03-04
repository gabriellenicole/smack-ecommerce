import React from 'react'
import { BiPhoneCall } from 'react-icons/bi'

export default function () {
  return (
    <div className='px-12 py-2 flex justify-between bg-orange'>
      <div className='flex items-center space-x-3'>
        <BiPhoneCall size={'1rem'} color='#FFFFFF' />
        <p className='text-sm text-white'>+65 88812394</p>
      </div>
      <p className='text-sm text-white'>
        Get 50% Off on Selected Items | Free Delivery Worldwide
      </p>
      <p className='text-sm text-white'>smack@gmail.com</p>
    </div>
  )
}
