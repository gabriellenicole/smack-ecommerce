import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartToggle: false,
  },
  reducers: {
    toggleCart: (state) => {
      state.cartToggle = !state.cartToggle
    },
  },
})

export const { toggleCart } = cartSlice.actions

// selectors
export const selectCart = (state) => state.cart.cartToggle

export default cartSlice.reducer
