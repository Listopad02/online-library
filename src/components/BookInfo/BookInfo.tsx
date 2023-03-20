import { FC, useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import dompurify from 'dompurify';
import Loader from '../Loader/Loader';
import { setLoading } from '../../store/booksSlice';
import "./BookInfo.scss"

const BookInfo: FC = () => {
  const dispatch = useAppDispatch()
  const book = useAppSelector(state => state.books.book)
  const loading = useAppSelector(state => state.books.loading)
  const sanitizer = dompurify.sanitize

  useEffect(() => {
    if (!book) dispatch(setLoading(true))
    else dispatch(setLoading(false))
  })
  
  return (
    <div className='bookInfo'>
      {
        loading ? 
        <Loader /> :
        <>
          <div className="bookInfo__item image">
          <img 
            src={book?.volumeInfo.imageLinks?.thumbnail ? 
                  book?.volumeInfo.imageLinks.thumbnail : 
                  'https://books.google.com/books/content?id=xsXnngEACAAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'} 
            alt={book?.volumeInfo.title} />
          </div>
          <div className="bookInfo__item text">
            <p className='bookInfo__item-category'>{book?.volumeInfo.categories?.join(' / ') || null}</p>
            <h2>{book?.volumeInfo.title}</h2>
            <p className="bookInfo__item-authors">{book?.volumeInfo.authors?.join(', ') || null}</p>
            <div className='bookInfo__item-description' dangerouslySetInnerHTML={{ __html: sanitizer(`${book?.volumeInfo.description}`) }}></div>
          </div>
        </>
      }
    </div>
  )
}

export default BookInfo