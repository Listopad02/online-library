import { FC, useState, useEffect } from 'react'
import { Input, Select } from 'antd';
import { getBooks } from '../../services/books';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { setBooks, setLoading } from '../../store/booksSlice';
import "./Header.scss"

const Header: FC = () => {
  const dispatch = useAppDispatch()
  const { Search } = Input
  const [category, setCategory] = useState('newest')
  const [sortBy, setSortBy] = useState('all')
  const [value, setValue] = useState('')
  const startIndex = useAppSelector(state => state.books.startIndex)

  const handleSearch = () => {
    getBooks({ q: sortBy === 'all' ? value : `${value}+subject:${sortBy}`, orderBy: category, startIndex: startIndex, maxResults: 30, key: 'AIzaSyDYSwzuICwD2H47mJrPOAmC5rby3aX2h14' })
      .then(response => dispatch(setBooks(response.data)))
    dispatch(setLoading(true))
  }

  return (
    <div className='header'>
      <h1>Online Google Library</h1>
      <div className="header__inputForm">
        <Search 
          placeholder="Example: TypeScript"
          onChange={e => setValue(e.target.value)} 
          onSearch={handleSearch} 
          enterButton 
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
            onChange={(value) => setCategory(value)}
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
            onChange={(value) => setSortBy(value)}
          />
        </div>
      </div>
    </div>
  )
}

export default Header