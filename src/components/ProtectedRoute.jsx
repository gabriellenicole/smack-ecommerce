import { Outlet } from 'react-router-dom'
import { useUser } from '../hooks/useUser'
import { Navigate } from 'react-router-dom'
import axios from 'axios'
import { useEffect } from 'react'
import { useCart } from '../hooks/useCart'
export default function ProtectedRoute() {
  const { currentUser } = useUser()

  const { updateCart } = useCart()
  const getCart = async () => {
    const response = await axios.get(`http://localhost:3000/cart`)
    updateCart(response.data)
  }

  // call only once when component mounted
  useEffect(() => {
    // only call whenever currentUser does exist
    if (currentUser) {
      getCart()
    }
  }, [])
  return currentUser ? <Outlet /> : <Navigate to='/login' />
}
