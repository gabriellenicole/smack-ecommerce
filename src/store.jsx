import { configureStore } from '@reduxjs/toolkit'
import userReducer from './features/userSlice'
import filterReducer from './features/filterSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    filter: filterReducer,
  },
})
