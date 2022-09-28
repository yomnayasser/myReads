import "./Search.css";
import { useState } from "react";
import Book from "../../Components/Book/Book";
import * as BooksAPI from "../../BooksAPI";
import {Link} from "react-router-dom"
const Search = (props) => {
  const [searchResult, setSearchResult] = useState([]);
  const [searching,setSearching]=useState(false)
  const searchBook = async (input,event) => {
    event.preventDefault();
    try{
      const res = await BooksAPI.search(input);
   
      if(input==='' || res?.length===0)
      {
        
         setSearchResult([])
      }
      else{
       
        setSearchResult(res)
      }
      // setSearching(true)

    }
    catch(e){

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
                searchBook(event.target.value,event);
              }}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {
              searchResult.length!==0 &&
              searchResult.map((book) => {
                let found = false;
                for (let i = 0; i < props.Books.length; i++) {
                  if (book.id === props.Books[i].id) {
                    found = true;
                    console.log(props.Books[i])
                    return (
                      <li key={props.Books[i].id}>
                        <Book
                          book={props.Books[i]}
                          changeStatus={props.changeStatus}
                        />
                      </li>
                    );
                  }
                }
                if (!found) {
                  //console.log(book)
                  return (
                    <li key={book.id}>
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
