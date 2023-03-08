import React from 'react'
import Logo from '../components/Logo'

export default function Login() {
  const handleClick = () => {}
  return (
    <div className='h-screen w-screen items-center flex justify-center bg-beige'>
      <div className='bg-white flex flex-col items-center justify-center gap-y-5 shadow-md p-10 rounded-lg py-20'>
        <Logo />
        <input
          type='text'
          placeholder='Enter your username'
          className='mt-8 p-3 w-80 bg-gray bg-opacity-10 rounded-lg px-5'
        ></input>
        <input
          type='password'
          placeholder='Enter your password'
          className='p-3 w-80 bg-gray bg-opacity-10 rounded-lg px-5'
        ></input>
        <button
          onClick={handleClick}
          className='button-class bg-orange text-white w-80 font-semibold'
        >
          Sign in
        </button>
      </div>
    </div>
  )
}
