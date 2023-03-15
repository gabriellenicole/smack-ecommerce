import { useDispatch, useSelector } from 'react-redux'
import {
  toggleCart,
  updateCart,
  selectCart,
  currentCart,
} from '../features/cartSlice'

export const useCart = () => {
  const cart = useSelector(selectCart)
  const updatedCart = useSelector(currentCart)
  const dispatch = useDispatch()

  const toggleCartHelper = () => {
    dispatch(toggleCart())
  }

  const updateCartHelper = (newCartList) => {
    dispatch(updateCart(newCartList))
  }

  return {
    showCart: cart,
    currentCart: updatedCart,
    toggleCart: toggleCartHelper,
    updateCart: updateCartHelper,
  }
}
