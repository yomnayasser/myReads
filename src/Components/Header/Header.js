import "./Header.css";
const Header = (props) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{props.Header}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">{props.children}</ol>
      </div>
    </div>
  );
};
export default Header;
