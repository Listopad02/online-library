import { FC } from 'react'
import { Root } from "./pages/Root"
import { Route, Routes } from "react-router"

enum Links {
  Books = "/books",
  BookDetail = "/BookDetail",
}

const App: FC = () => {
  return (
    <Root>
      <Routes>
        <Route path={Links.Books} />
        <Route path={Links.BookDetail} />
      </Routes>
    </Root>
  )
}

export default App