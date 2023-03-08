import { useEffect, useState } from 'react'
import { useUser } from '../hooks/useUser'
import { Outlet } from 'react-router-dom'

export default function PersistAuth() {
  const { currentUser, login } = useUser()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const user = localStorage.getItem('user') || ''
    const password = localStorage.getItem('password') || ''
    login(user)
    setLoading(false)
  }, [currentUser])
  return loading ? <p>loading...</p> : <Outlet />
}
