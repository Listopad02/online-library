import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IBooksInfo } from './types'

interface IBooksState {
  booksInfo: IBooksInfo,
  loading: boolean,
  startIndex: number,
  inputValue: string,
  category: string,
  sortBy: string
}

const initialState: IBooksState = {
  booksInfo: {},
  loading: false,
  startIndex: 0,
  inputValue: '',
  category: 'newest',
  sortBy: 'all'
}

export const booksSlice = createSlice({
  name: 'booksInfo',
  initialState,
  reducers: {
    setBooks: (state, action: PayloadAction<IBooksInfo>) => {
      state.booksInfo = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setStartIndex: (state) => {
      state.startIndex += 29;
    },
    setInputValue: (state, action: PayloadAction<string>) => {
      state.inputValue = action.payload
    },
    setCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload
    },
    setSortBy: (state, action: PayloadAction<string>) => {
      state.sortBy = action.payload
    },
  },
})

export const { setBooks, setLoading, setStartIndex, 
               setInputValue, setCategory, setSortBy } = booksSlice.actions
export default booksSlice.reducer