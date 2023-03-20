import { FC } from 'react'
import { Input, Select } from 'antd';
import { getBooks } from '../../services/books';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { setBooks, setLoading, setInputValue, setCategory, setSortBy } from '../../store/booksSlice';
import { useNavigate } from 'react-router-dom';
import "./Header.scss"

const Header: FC = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const { Search } = Input
  const key = process.env.REACT_APP_API_KEY

  const startIndex = useAppSelector(state => state.books.startIndex)
  const inputValue = useAppSelector(state => state.books.inputValue)
  const category = useAppSelector(state => state.books.category)
  const sortBy = useAppSelector(state => state.books.sortBy)

  const handleSearch = () => {
    if (inputValue !== '') {
      getBooks({ q: sortBy === 'all' ? inputValue : `${inputValue}+subject:${sortBy}`, orderBy: category, startIndex: startIndex, maxResults: 30, key: key })
        .then(response => {
          dispatch(setLoading(false))
          dispatch(setBooks(response.data))
        })
      dispatch(setLoading(true))
      navigate('/')
    }
  }

  return (
    <div className='header'>
      <h1>Online Google Library</h1>
      <div className="header__inputForm">
        <Search 
          placeholder="Example: TypeScript"
          onChange={e => dispatch(setInputValue(e.target.value))} 
          onSearch={handleSearch} 
          enterButton 
          value={inputValue}
        />
      </div>
      <div className="header__selects">
        <div className="header__selects-item">
          <p>Categories</p>
          <Select
            defaultValue="newest"
            style={{ width: 120 }}
            options={[
              { value: 'newest', label: 'newest' },
              { value: 'relevance', label: 'relevance' },
            ]}
            onChange={(value) => dispatch(setCategory(value))}
          />
        </div>
        <div className="header__selects-item">
        <p>Sorting by</p>
          <Select
            defaultValue="all"
            style={{ width: 120 }}
            options={[
              { value: 'all', label: 'all' },
              { value: 'art', label: 'art' },
              { value: 'biography', label: 'biography' },
              { value: 'computers', label: 'computers' },
              { value: 'history', label: 'history' },
              { value: 'medical', label: 'medical' },
              { value: 'poetry', label: 'poetry' },
            ]}
            onChange={(value) => dispatch(setSortBy(value))}
          />
        </div>
      </div>
    </div>
  )
}

export default Header