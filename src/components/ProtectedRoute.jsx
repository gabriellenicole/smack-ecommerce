import { Outlet } from 'react-router-dom'
import { useUser } from '../hooks/useUser'
import { Navigate } from 'react-router-dom'

export default function ProtectedRoute() {
  const { currentUser } = useUser()

  return currentUser ? <Outlet /> : <Navigate to='/login' />
}
