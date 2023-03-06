import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Axios from 'axios'

export default function Product() {
  const id = useParams().id
  const [item, setItem] = useState()
  const [qty, setQty] = useState(0)
  const getItems = () => {
    Axios.get(`http://localhost:3000/items/${id}`).then((response) => {
      console.log(response.data)
      setItem(response.data)
    })
  }

  useEffect(() => {
    getItems()
  }, [])

  return (
    <div className='flex items-center p-10 justify-center'>
      <img className='w-[600px]' src={item?.image} />
      <div className='flex flex-col gap-y-10'>
        <h1 className='font-semibold text-3xl'>{item?.name}</h1>
        <p className='text-2xl text-orange'>${item?.price}</p>
        <div className='flex w-80 gap-x-7'>
          <div className='flex flex-1 items-center w-36 justify-between bg-gray bg-opacity-5 rounded-full p-2 px-4'>
            <button
              onClick={() => (qty != 0 ? setQty(qty - 1) : '')}
              className='text-xl font-light cursor-pointer'
            >
              -
            </button>
            <span className='font-semibold text-xl'>{qty}</span>
            <button
              onClick={() => setQty(qty + 1)}
              className='text-xl font-light cursor-pointer'
            >
              +
            </button>
          </div>
          <span className='w-32 text-sm'>
            Only <span className='font-semibold'>{item?.quantity} items </span>
            left. Don't miss it
          </span>
        </div>
        <button className='button-class bg-orange text-white rounded-full mt-10 py-3 text-lg font-semibold w-56'>
          Add to Cart
        </button>
      </div>
    </div>
  )
}
