import "./Home.css";
import { useState, useEffect } from "react";
import Book from "../../Components/Book/Book";
import Header from "../../Components/Header/Header";
import * as BooksAPI from "../../BooksAPI";
import { Link } from "react-router-dom";
const Home = (props) => {  
  return (
    <div className="app">
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <Header Header="Currently Reading">
              {props.Books.filter((book) => book.shelf === "currentlyReading").map(
                (book, key) => {
                  return (
                    <li key={key}>
                      <Book book={book} changeStatus={props.changeStatus} />
                    </li>
                  );
                }
              )}
            </Header>
            <Header Header="Want to Read">
              {props.Books.filter((book) => book.shelf === "wantToRead").map(
                (book, key) => {
                  return (
                    <li key={key}>
                      <Book book={book} changeStatus={props.changeStatus} />
                    </li>
                  );
                }
              )}
            </Header>
            <Header Header="Read">
              {props.Books.filter((book) => book.shelf === "read").map(
                (book, key) => {
                  return (
                    <li key={key}>
                      <Book book={book} changeStatus={props.changeStatus} />
                    </li>
                  );
                }
              )}
            </Header>
          </div>
        </div>
        <div className="open-search">
        <Link to="/search">Add a book</Link>
          {/* <Link to={{
              pathname:"/search",
              changeStatus:changeStatus,
              allBooks:Books
          }}>Add a book</Link> */}
        </div>
      </div>
    </div>
  );
};
export default Home;
