import { FC } from 'react'
import { useAppSelector } from '../../store/hooks';
import "./Cards.scss"

const Cards: FC = () => {
  const books = useAppSelector(state => state.books.booksInfo)
  console.log("books", books)

  return (
    <div className='cards__row'>
      { books.items?.map(item => {
        console.log(item.volumeInfo.authors)
        return (
        <div key={item.id} className="cards__col">
          <div className="cards__card">
            <div className="cards__card-img">
              <img 
                src={item.volumeInfo.imageLinks.thumbnail} 
                alt={item.volumeInfo.title} 
              />
            </div>
            <div className="cards__card-body">
              <p className='cards__body-category'>{item.volumeInfo.categories ? item.volumeInfo.categories[0] : null}</p>
              <p className='cards__body-title'>{item.volumeInfo.title || null}</p>
              <p className='cards__body-authors'>{item.volumeInfo.authors?.join(', ') || null}</p>
            </div>
          </div>
        </div>
      )})}
    </div>
  )
}

export default Cards