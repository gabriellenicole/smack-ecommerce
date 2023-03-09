import React, {useState} from 'react'
import { FiTrash } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import {useUser} from "../hooks/useUser.jsx";

export default function Cart({ page }) {
  const navigate = useNavigate()
    const {currentUser} = useUser()
  const [data, setData] = useState([])
  // const handleClick = () => {
  //     Axios.post(`http://localhost:9999/api/listings`, {params: {"user_id": currentUser}, "listing_id": list, "quantity": qty} )
  //         .then()
  // }

  return (
    <>
      <h1 className='font-semibold text-2xl mb-2'>Your cart</h1>
      <div className='overflow-auto max-h-[400px] my-7'>
        {data?.map((item) => (
          <div className='flex items-center my-5'>
            <img src={item.imgSrc} className='w-36'></img>
            <div className='flex flex-1 flex-col justify-between gap-y-1'>
              <h1 className='font-semibold mb-2 text-lg'>{item.title}</h1>
              <p className='opacity-60'>
                {item.description.substring(0, 50)}...{' '}
              </p>
              <div className='text-orange text-lg'>1 x ${item.price}</div>
            </div>
            <FiTrash
              size={20}
              className='ml-auto stroke-red w-20 cursor-pointer'
            />
          </div>
        ))}
      </div>
      <div className='flex justify-between'>
        <span className='font-semibold text-lg'>SUBTOTAL</span>
        <span className='font-semibold text-lg'>$123</span>
      </div>
      {page == 'navbar' && (
        <div className='flex justify-between items-end mt-5'>
          <span className='opacity-70 mb-2 cursor-pointer text-sm text-red'>
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
    </>
  )
}
