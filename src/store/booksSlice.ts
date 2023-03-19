import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IBooksInfo } from './types'

interface IBooksState {
  booksInfo: IBooksInfo,
  loading: boolean,
  startIndex: number
}

const initialState: IBooksState = {
  booksInfo: {},
  loading: false,
  startIndex: 0,
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
    }
  },
})

export const { setBooks, setLoading, setStartIndex } = booksSlice.actions
export default booksSlice.reducer