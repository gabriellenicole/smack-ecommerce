import { createSlice } from '@reduxjs/toolkit'

export const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    filter: null,
  },
  reducers: {
    add: (state, action) => {
      state.filter = action.payload
    },
    clear: (state) => {
      state.filter = null
    },
  },
})

export const { add, clear } = filterSlice.actions

// selectors
export const selectFilter = (state) => state.filter.filter

export default filterSlice.reducer
