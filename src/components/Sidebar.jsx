import React from 'react'
import CheckboxInput from './CheckboxInput'

export default function Sidebar() {
  return (
    <div className='flex flex-col pr-12 pl-4 rounded-lg gap-y-3 w-56 relative'>
      <div className='flex flex-col mb-4 sticky top-32'>
        {/* Categories */}
        <h3 className='font-semibold text-lg mt-8 mb-2'>Categories</h3>
        <CheckboxInput label='Cookie Dough' tag='cookieDough' type='checkbox' />
        <CheckboxInput label='Cookies' tag='cookies' type='checkbox' />
        <CheckboxInput label='Chips' tag='chips' type='checkbox' />
        <CheckboxInput label='Dried Fruit' tag='driedFruit' type='checkbox' />
        {/* Price */}
        <h3 className='font-semibold text-lg mt-8 mb-2'>Price</h3>
        <CheckboxInput label='$0 - $10' tag='toTen' type='checkbox' />
        <CheckboxInput label='$10 - $50' tag='toFifty' type='checkbox' />
        <CheckboxInput label='$50 - $100' tag='toHundred' type='checkbox' />
        <CheckboxInput label='>$100' tag='moreThanHundred' type='checkbox' />
        {/* Sort */}
        <h3 className='font-semibold text-lg mt-8 mb-2'>Sort by</h3>
        <CheckboxInput label='Highest Price' tag='highToLow' type='radio' />
        <CheckboxInput label='Lowest Price' tag='lowToHigh' type='radio' />
        <input
          type='submit'
          className='button-class border-2 border-orange text-orange'
          value='Sort and Filter'
        ></input>
      </div>
    </div>
  )
}
