import "./App.css";
import { useState, useEffect } from "react";
import {Route,Routes} from "react-router-dom"
import * as BooksAPI from "./BooksAPI";
import Search from './Pages/Search/Search'
import Home from "./Pages/Home/Home";
function App() {
  const [Books, setBooks] = useState([]);
  useEffect(() => {
    const getBooks = async () => {
      const res = await BooksAPI.getAll();
      setBooks(res);
    };
    getBooks();
  }, [Books]);
  const updateShelf = async (book, shelf) => {
    await BooksAPI.update(book, shelf);
  };
  const changeStatus = (updateBook, shelf) => {
    if (!updateBook.shelf) {
      updateShelf(updateBook, shelf);
      setBooks([...Books, { ...updateBook, shelf: shelf }]);
    } else {
      const newState = Books.map((book) => {
        if (book.id === updateBook.id) {
          updateShelf(updateBook, shelf);
          return { ...book, shelf: shelf };
        }
        return book;
      });
      setBooks(newState);
    }
  };
  return (
    <Routes>
       <Route exact path="/" element={<Home Books={Books} changeStatus={changeStatus} />}/>
       <Route exact path="/search" element={ <Search Books={Books} changeStatus={changeStatus}/>}/>
     </Routes>
  );
}

export default App;
