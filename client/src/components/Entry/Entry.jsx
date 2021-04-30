import "./Entry.css";
import { Link } from "react-router-dom"


export default function Entry(props) {
  const { id, term, deck_id } = props
  // id={entry.id}
  // term={entry.term}
  // username={currentUser.username}
  // key={index}
  // deck_id={deck_id}
  // removeEntry(id)

  return (
  <div className="entry-div card">
        <p className="entry-div-term">{term}</p>
      <Link to={`/${deck_id}/edit-entry/${id}`} className="edit-link">Edit</Link>
  </div>
  )
}