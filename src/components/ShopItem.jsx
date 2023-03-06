import React from 'react'
import { FiShoppingCart } from 'react-icons/fi'

export default function ShopItem({ itemName, imgSrc, price }) {
  return (
    <div className='flex flex-col justify-between gap-y-1 px-5 py-5 rounded-lg border-2 border-black border-opacity-5 ml-5 mb-10 shadow-md min-h-[470px]'>
      <img className='w-80 mx-auto' src={imgSrc}></img>
      <h1 className='font-semibold text-lg'>{itemName}</h1>
      <p className='text-xl'>${price}</p>
      {/* <button className='rounded-full w-14 h-14 bg-orange ml-auto hover:bg-opacity-90 shadow-md focus:ring-4 focus:ring-darkerOrange'>
        <FiShoppingCart className='w-6 h-6 stroke-white ml-[0.85rem]' />
      </button> */}
    </div>
  )
}
