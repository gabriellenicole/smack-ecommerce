import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Landing from '../components/Landing'
import Sidebar from '../components/Sidebar'

export default function Home() {
  return (
    <div className='relative'>
      <Header />
      <Navbar />
      <Landing />
      <div className='flex px-8 my-10'>
        <Sidebar />
      </div>
    </div>
  )
}
