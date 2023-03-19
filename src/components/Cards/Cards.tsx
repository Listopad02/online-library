import { FC, useEffect } from 'react'
import { setLoading, setStartIndex } from '../../store/booksSlice';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { SearchOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import Loader from '../Loader/Loader';
import "./Cards.scss"

const Cards: FC = () => {
  const books = useAppSelector(state => state.books.booksInfo)
  const loading = useAppSelector(state => state.books.loading)
  const dispatch = useAppDispatch()

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
  }

  return (
    <div className='cards'>
      {
        loading ?
        <Loader /> :
        <>
          <h2>{handleResult()}</h2>
          <div className='cards__row'>
            {books.items?.map(item => {
              return (
                <div key={item.id} className="cards__col">
                  <div className="cards__card">
                    <div className="cards__card-img">
                      {
                        item.volumeInfo.imageLinks?.thumbnail ? (
                          <img
                            src={item.volumeInfo.imageLinks.thumbnail}
                            alt={item.volumeInfo.title}
                          />
                        ) : 'Нет картинки'
                      }
                    </div>
                    <div className="cards__card-body">
                      <p className='cards__body-category'>{item.volumeInfo.categories ? item.volumeInfo.categories[0] : null}</p>
                      <p className='cards__body-title'>{item.volumeInfo.title || null}</p>
                      <p className='cards__body-authors'>{item.volumeInfo.authors?.join(', ') || null}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
          {
            books.totalItems && books.totalItems > 30 ?
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