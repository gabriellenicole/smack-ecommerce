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
    let cat = ''
    let price = ''
    let sort = ''
    if (currentFilter) {
      cat = currentFilter.category ? currentFilter.category.join('+') : ''
      price = currentFilter.priceRange ? currentFilter.priceRange.join('+') : ''
      sort = currentFilter.sort ? currentFilter.sort : ''
    }
    console.log(
      `http://localhost:9999/api/listings?category=${cat}&?priceRange=${price}&sort=${sort}`
    )
    // Axios.get(`http://localhost:9999/api/listings?category=${cat}&?priceRange=${price}&sort=${sort}`).then((response) => {
    //   setData(response.data)
    // })
  }

  useEffect(() => {
    getItems()
    console.log('called')
  }, [currentFilter])

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
