import { FC } from 'react'
import { Input, Select } from 'antd';
import "./Header.scss"

const Header: FC = () => {
  const { Search } = Input;
  const handleSearch = (value: string) => console.log(value);

  return (
    <div className='header'>
      <h1>Online Google Library</h1>
      <div className="header__inputForm">
        <Search 
          placeholder="Example: TypeScript" 
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
          />
        </div>
      </div>
    </div>
  )
}

export default Header