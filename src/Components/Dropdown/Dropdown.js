import './Dropdown.css'
const Dropdown=(props)=>{
return(
    <div className="book-shelf-changer">
        <select onChange={(event)=>{props.onChange(event.target.value)}}>
          <option value="none" disabled>
            Move to...
          </option>
          <option value="currentlyReading" selected={props.shelf==="currentlyReading"}>
            Currently Reading
          </option>
          <option value="wantToRead" selected={props.shelf==="wantToRead"}>Want to Read</option>
          <option value="read" selected={props.shelf==="read"}>Read</option>
          <option value="none" selected={!props.shelf}>None</option>
        </select>
      </div>
)
}
export default Dropdown;