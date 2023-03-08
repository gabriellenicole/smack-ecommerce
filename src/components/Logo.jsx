import React from 'react'
import { BiCookie } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'

export default function Logo() {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/')
  }
  return (
    <div onClick={handleClick}>
      <div className='flex items-center space-x-2 '>
        <BiCookie size={'3rem'} color='#FE9800' />
        <h1 className='font-semibold text-3xl bg-gradient-to-r text-transparent bg-clip-text from-orange to-[#ffb96a]'>
          Smack.
        </h1>
      </div>
    </div>
  )
}
