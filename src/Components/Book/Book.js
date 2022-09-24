import './Book.css'
import Dropdown from './../Dropdown/Dropdown';
const Book=(props)=>{
    const onChangeStatus=(shelf)=>{
         console.log(shelf)
         console.log(props.book)
        props.changeStatus(props.book,shelf)
    }
return(
    <div className="book">
    <div className="book-top">
      <div
        className="book-cover"
        style={{
          width: 128,
          height: 193,
          backgroundImage:
            `url("${props.book.imageLinks.thumbnail}")`,
        }}
      ></div>
     <Dropdown onChange={onChangeStatus} shelf={props.book.shelf}/>
    </div>
    <div className="book-title">{props.book.title}</div>
    <div className="book-authors">{props.book.author}</div>
  </div>
)
}
export default Book;