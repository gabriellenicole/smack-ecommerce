import { Outlet } from 'react-router-dom'
import { useUser } from '../hooks/useUser'
import { Navigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useCart } from '../hooks/useCart'
import { smackAxios } from '../api'

export default function ProtectedRoute() {
  const { currentUser } = useUser()

  const { updateCart } = useCart()
  const getCart = async () => {
    // API CALL: get initial item inside cart
    const response = await smackAxios.get(
      `api/cart?listingId=&userId=${currentUser.userId}`
    )
    updateCart(response.data)
  }

  useEffect(() => {
    // only call whenever currentUser does exist
    if (currentUser) {
      getCart()
    }
  }, [])
  return currentUser ? <Outlet /> : <Navigate to='/login' />
}
