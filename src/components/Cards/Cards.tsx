import { FC, useEffect } from 'react'
import { setLoading, setStartIndex, setBooksMore, setBook } from '../../store/booksSlice';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { SearchOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { getBooks, getBook } from '../../services/books';
import { Link } from "react-router-dom";
import { Typography } from 'antd';
import { Item } from '../../store/types';
import Loader from '../Loader/Loader';
import "./Cards.scss"

const Cards: FC = () => {
  const books = useAppSelector(state => state.books.booksInfo)
  const loading = useAppSelector(state => state.books.loading)
  const startIndex = useAppSelector(state => state.books.startIndex)
  const inputValue = useAppSelector(state => state.books.inputValue)
  const category = useAppSelector(state => state.books.category)
  const sortBy = useAppSelector(state => state.books.sortBy)
  const dispatch = useAppDispatch()
  const { Text } = Typography;

  useEffect(() => {
    if (books.items || books.totalItems === 0) dispatch(setLoading(false))
  }, [books.items, books.totalItems, dispatch])

  const handleResult = () => {
    if (books.totalItems === 0) {
      return 'No results found'
    }
    if (books.items?.length === 0 || books.totalItems === undefined) {
      return null
    }
    else return `Found ${books.totalItems} results`
  }

  const paginateResult = () => {
    dispatch(setStartIndex())
    getBooks({ q: sortBy === 'all' ? inputValue : `${inputValue}+subject:${sortBy}`, orderBy: category, startIndex: startIndex, maxResults: 30, key: 'AIzaSyDYSwzuICwD2H47mJrPOAmC5rby3aX2h14' })
      .then(response => dispatch(setBooksMore(response.data)))
  }

  return (
    <div className='cards'>
      {
        loading ?
        <Loader /> :
        <>
          <h2>{handleResult()}</h2>
          <div className='cards__row'>
            {books.items?.map((item, i) => {
              return (
                // есть книги с неуникальными ключами
                <Link 
                  to={"BookDetail/" + item.id} 
                  key={item.id + i} 
                  className="cards__col"
                  onClick={() => getBook(item.id)
                    .then(response => dispatch(setBook(response.data as Item)))
                  }
                >
                  <div className="cards__card">
                    <div className="cards__card-img">
                      {
                        item.volumeInfo.imageLinks?.thumbnail ? (
                          <img
                            src={item.volumeInfo.imageLinks.thumbnail}
                            alt={item.volumeInfo.title}
                          />
                        ) : 'No Picture'
                      }
                    </div>
                    <div className="cards__card-body">
                      <p className='cards__body-category'>
                        {item.volumeInfo.categories ? item.volumeInfo.categories[0] : null}
                      </p>
                      <Text 
                        ellipsis={{
                          tooltip: item.volumeInfo.title
                        }}
                        className='cards__body-title'
                      >
                        {item.volumeInfo.title || null}
                      </Text>
                      <p className='cards__body-authors'>
                        {item.volumeInfo.authors?.join(', ') || null}
                      </p>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
          {
            books.totalItems && startIndex + 29 < books.totalItems ?
            <Button 
              type="primary" 
              icon={<SearchOutlined />}
              onClick={() => paginateResult()}
            >
              Show More
            </Button> : 
            null
          }
        </>
      }
    </div>
  )
}

export default Cards