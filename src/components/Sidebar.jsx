import React, {useEffect, useRef, useState} from 'react'
import { useFilter } from '../hooks/useFilter'

export default function Sidebar() {
  const { add, clear, selectFilter } = useFilter()
  const [priceRange, setPriceRange] = useState([])
  const [sort, setSort] = useState(null)
  const [subCat, setSubCat] = useState([])

  const [getRequest, setGetRequest] = useState("")

  const ref = useRef([])

  useEffect(() => {
    console.log("sort: " + sort)
    console.log("subcat: " + subCat)
    console.log("pricerange: " + priceRange)
    let subCat_joined = subCat.join('+')
    let priceRange_joined = priceRange.join('+')
    setGetRequest(`http://localhost:9999/api/listings?category=${subCat_joined}&?priceRange=${priceRange_joined}&sort=${sort}`)
  },[priceRange, sort, subCat])

  const handleClear = () => {
    console.log(selectFilter)
    for (let i = 0; i < ref.current.length; i++) {
      ref.current[i].checked = false
    }
    setSubCat([])
    setPriceRange([])
    setSort(null)
    clear()
  }

  const categories = [
    {
      id: 0,
      label: 'Pretzel',
      tag: 'pretzel',
    },
    {
      id: 1,
      label: 'Seeds',
      tag: 'seeds',
    },
    {
      id: 2,
      label: 'Chips',
      tag: 'chips',
    },
    {
      id: 3,
      label: 'Dried Fruit',
      tag: 'driedFruit',
    },
    {
      id: 4,
      label: 'Crunchies',
      tag: 'crunchies',
    },
  ]

  const prices = [
    {
      id: 5,
      label: '$0-$5',
      tag: 'toFive',
    },
    {
      id: 6,
      label: '$5-$10',
      tag: 'fiveToTen',
    },
    {
      id: 7,
      label: '$10-$15',
      tag: 'tenToFifteen',
    },
    {
      id: 8,
      label: '>$15',
      tag: 'moreThanFifteen',
    },
  ]

  const handleChange = (e) => {
    const value = e.target.value
    const isChecked = e.target.checked
    const nextSubCat = isChecked
      ? [...subCat, value]
      : subCat.filter((item) => item !== value)
    setSubCat(nextSubCat)

    add(sort, priceRange, nextSubCat)
  }

  const handlePrice = (e) => {
    const value = e.target.value
    const isChecked = e.target.checked
    const nextPriceRange = isChecked
      ? [...priceRange, value]
      : priceRange.filter((item) => item !== value)

    setPriceRange(nextPriceRange)
    add(sort, nextPriceRange, subCat)
  }

  const handleSort = (e) => {
    const nextSort = e.target.value
    setSort(nextSort)
    add(nextSort, priceRange, subCat)
  }

  return (
    <div className='flex flex-col pr-12 pl-4 gap-y-3 w-64 relative'>
      <div className='flex flex-col mb-4 sticky top-28 w-36'>
        {/* Categories */}
        <h3 className='font-semibold text-lg mt-8 mb-2'>Categories</h3>
        {categories?.map((cat) => (
          <div className='flex items-center my-2' key={cat.id}>
            <input
              id={cat.tag}
              type='checkbox'
              value={cat.tag}
              className='w-4 h-4 accent-gray'
              onChange={handleChange}
              ref={(element) => {
                ref.current[cat.id] = element
              }}
            />
            <label htmlFor={cat.tag} className='ml-2'>
              {cat.label}
            </label>
          </div>
        ))}

        {/* Price */}
        <h3 className='font-semibold text-lg mt-8 mb-2'>Price</h3>
        {prices?.map((price) => (
          <div className='flex items-center my-2' key={price.id}>
            <input
              id={price.tag}
              type='checkbox'
              value={price.tag}
              className='w-4 h-4 accent-gray'
              onChange={handlePrice}
              ref={(element) => {
                ref.current[price.id] = element
              }}
            />
            <label htmlFor={price.tag} className='ml-2'>
              {price.label}
            </label>
          </div>
        ))}

        {/* Sort */}
        <h3 className='font-semibold text-lg mt-8 mb-2'>Sort by</h3>
        <div className='flex items-center my-2'>
          <input
            id='highToLow'
            type='radio'
            value='desc'
            className='w-4 h-4 accent-gray'
            onChange={handleSort}
            name='price'
            ref={(element) => {
              ref.current[9] = element
            }}
          />
          <label htmlFor='highToLow' className='ml-2'>
            Highest Price
          </label>
        </div>
        <div className='flex items-center my-2'>
          <input
            id='lowToHigh'
            type='radio'
            value='asc'
            className='w-4 h-4 accent-gray'
            name='price'
            onChange={handleSort}
            ref={(element) => {
              ref.current[10] = element
            }}
          />
          <label htmlFor='lowToHigh' className='ml-2'>
            Lowest Price
          </label>
        </div>
        <p
          onClick={handleClear}
          className='text-center underline mt-6 opacity-70 text-red cursor-pointer'
        >
          Clear Filter
        </p>
      </div>
    </div>
  )
}
