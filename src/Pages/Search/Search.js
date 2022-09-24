import "./Search.css";
import { useState } from "react";
import Book from "../../Components/Book/Book";
import * as BooksAPI from "../../BooksAPI";
import {Link} from "react-router-dom"
const Search = (props) => {
  const [query, setQuery] = useState(null);
  const [searchResult, setSearchResult] = useState([]);
  const searchBook = async (event) => {
    const res = await BooksAPI.search(query);
    if (event.key === "Enter") {
      setSearchResult(res);
    }
  };
  return (
    <div className="app">
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title, author, or ISBN"
              onChange={(event) => {
                setQuery(event.target.value);
              }}
              onKeyDown={searchBook}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {query &&
              searchResult.length !== 0 &&
              searchResult.map((book, key) => {
                let found = false;
                for (let i = 0; i < props.Books.length; i++) {
                  if (book.id === props.Books[i].id) {
                    found = true;
                    return (
                      <li key={key}>
                        <Book
                          book={props.Books[i]}
                          changeStatus={props.changeStatus}
                        />
                      </li>
                    );
                  }
                }
                if (!found) {
                  return (
                    <li key={key}>
                      <Book book={book} changeStatus={props.changeStatus} />
                    </li>
                  );
                }
              })}
          </ol>
        </div>
      </div>
    </div>
  );
};
export default Search;
