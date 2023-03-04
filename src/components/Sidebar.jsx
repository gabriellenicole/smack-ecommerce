import React from 'react'
import CheckboxInput from './CheckboxInput'

export default function Sidebar() {
  return (
    <div className='flex flex-col p-8 rounded-lg gap-y-3 w-56'>
      <div className='flex flex-col mb-4 gap-y-3'>
        <form method='get'>
          {/* Categories */}
          <h3 className='font-semibold text-lg'>Categories</h3>
          <CheckboxInput label='Cookie Dough' tag='cookieDough' />
          <CheckboxInput label='Cookies' tag='cookies' />
          <CheckboxInput label='Chips' tag='chips' />
          <CheckboxInput label='Dried Fruit' tag='driedFruit' />
          {/* Price */}
          <h3 className='font-semibold text-lg mt-8 mb-2'>Price</h3>
          <CheckboxInput label='$0 - $10' tag='toTen' />
          <CheckboxInput label='$10 - $50' tag='toFifty' />
          <CheckboxInput label='$50 - $100' tag='toHundred' />
          <CheckboxInput label='>$100' tag='moreThanHundred' />
          {/* Sort */}
          <h3 className='font-semibold text-lg mt-8 mb-2'>Sort by</h3>
          <CheckboxInput label='Highest Price' tag='highToLow' />
          <CheckboxInput label='Lowest Price' tag='lowToHigh' />
          <input
            type='submit'
            className='button-class border-2 border-orange text-orange'
            value='Sort and Filter'
          ></input>
        </form>
      </div>
    </div>
  )
}
