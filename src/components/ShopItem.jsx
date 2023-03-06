import React from 'react'
import { FiShoppingCart } from 'react-icons/fi'

export default function ShopItem({ itemName, imgSrc }) {
  return (
    <div className='flex flex-col gap-y-1 px-5 py-5 rounded-lg border-2 border-black border-opacity-5 ml-5 mb-10 shadow-md'>
      <img className='w-80 mx-auto' src={imgSrc}></img>
      <h1 className='font-semibold text-lg'>{itemName}</h1>
      <p className='text-black text-opacity-70 text-sm font-medium'>
        Soft-baked, rich chocolate.
      </p>
      <p className='font-medium text-lg'>$96</p>
      <button className='rounded-full w-14 h-14 bg-orange ml-auto hover:bg-opacity-90 shadow-md focus:ring-4 focus:ring-darkerOrange'>
        <FiShoppingCart className='w-6 h-6 stroke-white ml-[0.85rem]' />
      </button>
    </div>
  )
}
