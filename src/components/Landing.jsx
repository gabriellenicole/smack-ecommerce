import React from 'react'
import landing from '../assets/landing-illustration.png'

export default function Landing() {
  return (
    <div className='flex bg-beige px-48 mx-8 h-[32rem] items-center justify-between'>
      <div className='flex flex-col gap-y-2 w-5/12'>
        <p className='text-orange font-bold text-xl'>
          Grab yours while stock lasts
        </p>
        <h1 className='font-bold text-[3rem] leading-tight'>
          Diverse flavours, Good-for-you Snack
        </h1>
        {/* <h2 className='text-lg'>
          Discover the wildest selection of uncharted types and flavours from
          small-batch producers all over the world.
        </h2> */}
        <button className='rounded-lg bg-orange w-32 py-3 mt-10 font-semibold text-white shadow-md'>
          Shop Now
        </button>
      </div>

      <img className='h-[30rem]' src={landing} />
    </div>
  )
}
