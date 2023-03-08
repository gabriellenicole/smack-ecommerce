import { useDispatch, useSelector } from 'react-redux'
import { toggleCart, selectCart } from '../features/cartSlice'

export const useCart = () => {
  const cart = useSelector(selectCart)
  const dispatch = useDispatch()

  const toggleCartHelper = () => {
    dispatch(toggleCart())
  }
  return { showCart: cart, toggleCart: toggleCartHelper }
}
