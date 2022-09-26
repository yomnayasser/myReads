import "./Book.css";
import Dropdown from "./../Dropdown/Dropdown";
const Book = (props) => {
  const onChangeStatus = (shelf) => {
    console.log(shelf);
    console.log(props.book);
    props.changeStatus(props.book, shelf);
  };
  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: props.book.imageLinks.thumbnail?`url("${props.book.imageLinks.thumbnail}")`:''
            // backgroundImage: `url("${props.book.imageLinks.thumbnail}")`,

          }}
        ></div>
        <Dropdown onChange={onChangeStatus} shelf={props.book.shelf} />
      </div>
      <div className="book-title">{props.book.title}</div>
      {props.book.authors.map((author, index) => {
        if (index === props.book.authors.length - 1) {
          return <div className="book-authors">{author}</div>;
        } else {
          return <div className="book-authors">{`${author} , `}</div>;
        }
      })}
    </div>
  );
};
export default Book;
