import "./Entry.css";
import { Link } from "react-router-dom"
import { useState } from "react"

export default function Entry(props) {
  const { id, term, deck_id } = props
  const [front, setFront] = useState(true)

  const handleClick = () => {
    setFront(!front);
  };

  return (
    <div
      className="entry-div card"
      onClick={handleClick}
    >
      {front ? (
        <>
        <p className="entry-div-term">{term.length >= 17 ? `${term.substring(0, 14)}...` : term}</p>
          <Link to={`/${deck_id}/edit-entry/${id}`} className="edit-link">edit</Link>
          </>
      ): (
          <p>POOP</p>
      )}  
  </div>
  )
}