import "./Entry.css";
import { Link } from "react-router-dom"


export default function Entry(props) {
  const { id, term, deck_id } = props

  return (
  <div className="entry-div card">
        <p className="entry-div-term">{term.length >= 17 ? `${term.substring(0, 14)}...` : term}</p>
      <Link to={`/${deck_id}/edit-entry/${id}`} className="edit-link">edit</Link>
  </div>
  )
}