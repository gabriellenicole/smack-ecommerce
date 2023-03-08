import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import { useUser } from '../hooks/useUser'

export default function Layout() {
  const { currentUser } = useUser()
  return (
    <div>
      <Header />
      {currentUser && <Navbar />}
      <Outlet />
    </div>
  )
}
