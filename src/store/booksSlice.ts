import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IBooksInfo } from './types'

interface IBooksState {
  booksInfo: IBooksInfo,
}

const initialState: IBooksState = {
  booksInfo: {},
}

export const booksSlice = createSlice({
  name: 'booksInfo',
  initialState,
  reducers: {
    setBooks: (state, action: PayloadAction<IBooksInfo>) => {
      state.booksInfo = action.payload;
    },
  },
})

export const { setBooks } = booksSlice.actions
export default booksSlice.reducer