import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IBooksInfo, Item } from './types'

interface IBooksState {
  booksInfo: IBooksInfo,
  loading: boolean,
  startIndex: number,
  inputValue: string,
  category: string,
  sortBy: string,
  book: Item | null
}

const initialState: IBooksState = {
  booksInfo: {},
  loading: false,
  startIndex: 0,
  inputValue: '',
  category: 'newest',
  sortBy: 'all',
  book: null
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
    setBooksMore: (state, action: PayloadAction<IBooksInfo>) => {
      state.booksInfo = {
        ...state.booksInfo,
        items: state.booksInfo.items?.concat(action.payload.items!)
      }
    },
    setBook: (state, action: PayloadAction<Item>) => {
      state.book = action.payload
    },
  },
})

export const { setBooks, setLoading, setStartIndex, 
               setInputValue, setCategory, setSortBy, 
               setBooksMore, setBook } = booksSlice.actions
export default booksSlice.reducer