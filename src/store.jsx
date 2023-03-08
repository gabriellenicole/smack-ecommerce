import { configureStore } from '@reduxjs/toolkit'
import userReducer from './features/userSlice'
import filterReducer from './features/filterSlice'
import cartReducer from './features/cartSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    filter: filterReducer,
    cart: cartReducer,
  },
})
