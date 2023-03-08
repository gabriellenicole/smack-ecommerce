import React from 'react'
import { FiTrash } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'

export default function Cart({ page }) {
  const navigate = useNavigate()
  const data = [
    {
      id: 1,
      imgSrc:
        'https://cdn.shopify.com/s/files/1/0530/1351/2341/files/MM_BananaChocolateChip-4x7x2-3.png?v=1671119503&width=720',
      title: 'Dark Chocolate Chip Soft Cookie',
      description:
        'Soft-baked, rich chocolate. Soft-baked, rich chocolate. Soft-baked, rich chocolate.',
      price: 96,
      quantity: 10,
    },
    {
      id: 2,
      imgSrc:
        'https://cdn.shopify.com/s/files/1/0530/1351/2341/files/MM_SimplyAlmond-4x7x2-3_d430b44a-5c3a-473e-9dd9-96bf1b33b4c8.png?v=1672338294&width=720',
      title: 'Dark Chocolate Chip Soft Cookie',
      description: 'Soft-baked, rich chocolate.',
      price: 24,
      quantity: 10,
    },
    {
      id: 3,
      imgSrc:
        'https://cdn.shopify.com/s/files/1/0530/1351/2341/files/MM_SimplyAlmond-4x7x2-3_d430b44a-5c3a-473e-9dd9-96bf1b33b4c8.png?v=1672338294&width=720',
      title: 'Dark Chocolate Chip Soft Cookie',
      description: 'Soft-baked, rich chocolate.',
      price: 24,
      quantity: 10,
    },
    {
      id: 4,
      imgSrc:
        'https://cdn.shopify.com/s/files/1/0530/1351/2341/files/MM_BananaChocolateChip-4x7x2-3.png?v=1671119503&width=720',
      title: 'Dark Chocolate Chip Soft Cookie',
      description:
        'Soft-baked, rich chocolate. Soft-baked, rich chocolate. Soft-baked, rich chocolate.',
      price: 96,
      quantity: 10,
    },
  ]

  const handleClick = () => {
    navigate('/payment')
  }

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
