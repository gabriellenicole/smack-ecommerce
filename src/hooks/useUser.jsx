import { useDispatch, useSelector } from 'react-redux'
import { login, logout, selectUser } from '../features/userSlice'

export const useUser = () => {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  const loginHelper = (username) => {
    dispatch(login(username))
  }

  const logoutHelper = () => {
    // dispatch to the store with the logout action
    dispatch(logout())
    // sign out function from firebase
  }

  return { currentUser: user, login: loginHelper, logout: logoutHelper }
}
