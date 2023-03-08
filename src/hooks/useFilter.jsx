import { useDispatch, useSelector } from 'react-redux'
import { add, clear, selectFilter } from '../features/filterSlice'

export const useFilter = () => {
  const filter = useSelector(selectFilter)
  const dispatch = useDispatch()

  const addHelper = (sort, priceRange, category) => {
    dispatch(
      add({
        sort: sort,
        priceRange: priceRange,
        category: category,
      })
    )
  }

  const clearHelper = () => {
    dispatch(clear())
  }

  return { currentFilter: filter, add: addHelper, clear: clearHelper }
}
