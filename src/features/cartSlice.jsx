import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartToggle: false,
  product: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    toggleCart: (state) => {
      state.cartToggle = !state.cartToggle
    },
    updateCart: (state, action) => {
      state.product = action.payload
    },
  },
})

export const { toggleCart, updateCart } = cartSlice.actions

// selectors
export const selectCart = (state) => state.cart.cartToggle
export const currentCart = (state) => state.cart.product

export default cartSlice.reducer
