import { useDispatch, useSelector } from 'react-redux'
import { login, logout, selectUser } from '../features/userSlice'

export const useUser = () => {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  const loginHelper = ({ username, uid }) => {
    dispatch(login({ username: username, uid: uid }))
  }

  const logoutHelper = () => {
    // dispatch to the store with the logout action
    dispatch(logout())
    // sign out function from firebase
  }

  return { currentUser: user, login: loginHelper, logout: logoutHelper }
}
