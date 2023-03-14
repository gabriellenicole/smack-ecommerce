import { useDispatch, useSelector } from 'react-redux'
import { login, logout, selectUser } from '../features/userSlice'
import { useNavigate } from 'react-router-dom'

export const useUser = () => {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()
  const loginHelper = (username, userId) => {
    dispatch(login({ username: username, userId: userId }))
  }

  const logoutHelper = () => {
    // dispatch to the store with the logout action
    dispatch(logout())
    // sign out function from firebase
  }

  return { currentUser: user, login: loginHelper, logout: logoutHelper }
}
