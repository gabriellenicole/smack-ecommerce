import { useDispatch, useSelector } from 'react-redux'
import { login, logout, selectUser } from '../features/userSlice'
import { useCart } from './useCart'
import { useFilter } from './useFilter'

export const useUser = () => {
  const { toggleCart, showCart } = useCart()
  const { clear } = useFilter()
  const user = useSelector(selectUser)
  const dispatch = useDispatch()
  const loginHelper = (username, userId) => {
    dispatch(login({ username: username, userId: userId }))
  }

  const logoutHelper = () => {
    // clear filter state
    clear()

    // toggle cart if it's still shown
    if (showCart) {
      toggleCart()
    }
    dispatch(logout())
  }

  return { currentUser: user, login: loginHelper, logout: logoutHelper }
}
