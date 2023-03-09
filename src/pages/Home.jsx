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
      let cat = ""
      let prc = ""
      let srt = ""

      if(currentFilter){
          if (currentFilter.category){
              cat = currentFilter.category.join('+')
          }
          if(currentFilter.priceRange){
              prc = currentFilter.priceRange.join('+')
          }
          if(currentFilter.sort){
              srt = currentFilter.sort
          }
      }

      // console.log(cat)
      // console.log(srt)
      // console.log(prc)

    Axios.get(`http://localhost:9999/api/listings?category=${cat}&priceRange=${prc}&sort=${srt}`).then((response) => {
      setData(response.data)
        console.log(`http://localhost:9999/api/listings?category=${cat}&priceRange=${prc}&sort=${srt}`)
      //   console.log(response.data)
    })
  }

  useEffect(() => {
    getItems()
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
