import React, { useEffect, useState } from 'react'
import Landing from '../components/Landing'
import Sidebar from '../components/Sidebar'
import ShopItem from '../components/ShopItem'
import { Link } from 'react-router-dom'
import Axios from 'axios'
import { useFilter } from '../hooks/useFilter'

export default function Home() {
  const [data, setData] = useState([])
  const { currentFilter } = useFilter()
  const getItems = () => {
    Axios.get('http://localhost:3000/items').then((response) => {
      setData(response.data)
    })
  }

  console.log(currentFilter.priceRange.join('+'))
  console.log(currentFilter.sort)
  console.log(currentFilter.category.join('+'))

  useEffect(() => {
    getItems()
  }, [])

  return (
    <div>
      <Landing />
      <div className='flex px-8 my-10'>
        <Sidebar />
        <div className='grid grid-cols-4 mt-8'>
          {data.map((item) => (
            <div key={item.id}>
              <Link to={`product/${item.id}`}>
                <ShopItem
                  itemName={item.name}
                  price={item.price}
                  imgSrc={item.image}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
