import { FC } from 'react'
import "./Header.scss"

const Header: FC = () => {
  return (
    <div className='header'>
      <h1>Online Google Library</h1>
      <div className="header__inputForm">
        <input type="text" 
          placeholder="Example: JavaScript" 
        />
        <button type="submit">Search</button>
      </div>
      <div className="header__selects">
      </div>
    </div>
  )
}

export default Header