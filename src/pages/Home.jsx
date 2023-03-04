import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Landing from '../components/Landing'
import Sidebar from '../components/Sidebar'
import ShopItem from '../components/ShopItem'

export default function Home() {
  return (
    <div className='relative'>
      <Header />
      <Navbar />
      <Landing />
      <div className='flex px-8 my-10'>
        <Sidebar />
        <div className='grid grid-cols-4 mt-8'>
          <ShopItem
            imgSrc={
              'https://cdn.shopify.com/s/files/1/0530/1351/2341/files/MM_BananaChocolateChip-4x7x2-3.png?v=1671119503&width=720'
            }
          />
          <ShopItem
            imgSrc={
              'https://cdn.shopify.com/s/files/1/0530/1351/2341/files/MM_SimplyAlmond-4x7x2-3_d430b44a-5c3a-473e-9dd9-96bf1b33b4c8.png?v=1672338294&width=720'
            }
          />
          <ShopItem
            imgSrc={
              'https://cdn.shopify.com/s/files/1/0530/1351/2341/files/MM_PeanutButter-4x7x2-3_901ba22f-12a3-474a-a354-90ed23a43f67.png?v=1672338293&width=720'
            }
          />
          <ShopItem
            imgSrc={
              'https://cdn.shopify.com/s/files/1/0530/1351/2341/files/MM_BananaChocolateChip-4x7x2-3.png?v=1671119503&width=720'
            }
          />
          <ShopItem
            imgSrc={
              'https://cdn.shopify.com/s/files/1/0530/1351/2341/files/MM_SimplyAlmond-4x7x2-3_d430b44a-5c3a-473e-9dd9-96bf1b33b4c8.png?v=1672338294&width=720'
            }
          />
          <ShopItem
            imgSrc={
              'https://cdn.shopify.com/s/files/1/0530/1351/2341/files/MM_PeanutButter-4x7x2-3_901ba22f-12a3-474a-a354-90ed23a43f67.png?v=1672338293&width=720'
            }
          />
          <ShopItem
            imgSrc={
              'https://cdn.shopify.com/s/files/1/0530/1351/2341/files/MM_BananaChocolateChip-4x7x2-3.png?v=1671119503&width=720'
            }
          />
          <ShopItem
            imgSrc={
              'https://cdn.shopify.com/s/files/1/0530/1351/2341/files/MM_SimplyAlmond-4x7x2-3_d430b44a-5c3a-473e-9dd9-96bf1b33b4c8.png?v=1672338294&width=720'
            }
          />
          <ShopItem
            imgSrc={
              'https://cdn.shopify.com/s/files/1/0530/1351/2341/files/MM_PeanutButter-4x7x2-3_901ba22f-12a3-474a-a354-90ed23a43f67.png?v=1672338293&width=720'
            }
          />
          <ShopItem
            imgSrc={
              'https://cdn.shopify.com/s/files/1/0530/1351/2341/files/MM_BananaChocolateChip-4x7x2-3.png?v=1671119503&width=720'
            }
          />
          <ShopItem
            imgSrc={
              'https://cdn.shopify.com/s/files/1/0530/1351/2341/files/MM_SimplyAlmond-4x7x2-3_d430b44a-5c3a-473e-9dd9-96bf1b33b4c8.png?v=1672338294&width=720'
            }
          />
          <ShopItem
            imgSrc={
              'https://cdn.shopify.com/s/files/1/0530/1351/2341/files/MM_PeanutButter-4x7x2-3_901ba22f-12a3-474a-a354-90ed23a43f67.png?v=1672338293&width=720'
            }
          />
        </div>
      </div>
    </div>
  )
}
