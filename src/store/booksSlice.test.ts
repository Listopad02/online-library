import { setLoading, setCategory } from "./booksSlice"
import { store } from "./store"

const state = store.getState().books

describe('Empty default value test', () => {
  it('Should show booksInfo does not exist yet', () => {
    expect(state.booksInfo).toEqual({})
  })
  it('Should show book is not selected', () => {
    expect(state.book).toEqual(null)
  })
})

describe('Redux loading action test', () => {
  expect(store.dispatch(setLoading(false)))
    .toEqual({"payload": false, "type": "booksInfo/setLoading"})
})

describe('Redux filter action test', () => {
  expect(store.dispatch(setCategory('relevance')))
    .toEqual({"payload": 'relevance', "type": "booksInfo/setCategory"})
})