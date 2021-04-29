import "./Entry.css";
import { Link } from "react-router-dom"

export default function Entry(props) {
  return (
  <div className="entry-div card">
    <Link to={`/${props.id}/entries`}>
      <p className="entry-div-term">{props.term}</p>
    </Link>
  </div>
  )
}