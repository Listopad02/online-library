import { FC } from 'react'
import { useAppSelector } from '../../store/hooks';
import dompurify from 'dompurify';
import "./BookInfo.scss"

const BookInfo: FC = () => {
  const book = useAppSelector(state => state.books.book)
  const sanitizer = dompurify.sanitize
  
  return (
    <div className='bookInfo'>
      <div className="bookInfo__item image">
        <img src={book?.volumeInfo.imageLinks.thumbnail} alt={book?.volumeInfo.title} />
      </div>
      <div className="bookInfo__item text">
        <p className='bookInfo__item-category'>{book?.volumeInfo.categories?.join(' / ') || null}</p>
        <h2>{book?.volumeInfo.title}</h2>
        <p className="bookInfo__item-authors">{book?.volumeInfo.authors?.join(', ') || null}</p>
        <div className='bookInfo__item-description' dangerouslySetInnerHTML={{ __html: sanitizer(`${book?.volumeInfo.description}`) }}></div>
      </div>
    </div>
  )
}

export default BookInfo