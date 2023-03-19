import { FC } from 'react'
import { Root } from "./pages/Root"
import { Route, Routes } from "react-router"
import 'antd/dist/reset.css';
import { Books } from './pages/Books/Books';
import { BookDetail } from './pages/BookDetail/BookDetail';

enum Links {
  Books = "/",
  BookDetail = "/BookDetail/:id",
}

const App: FC = () => {
  return (
    <Root>
      <Routes>
        <Route path={Links.Books} element={<Books />} />
        <Route path={Links.BookDetail} element={<BookDetail />} />
      </Routes>
    </Root>
  )
}

export default App