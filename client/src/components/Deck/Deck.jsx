import "./Deck.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react"

export default function Deck(props) {
  const {
    deck,
    id,
    title,
    entries,
    getDeckEntries,
    publicDeck,
    idAuthor,
    publicUsers
  } = props
  const [author, setAuthor] = useState("")
  const [deckSize, setDeckSize] = useState("")

  useEffect(() => {
    if (entries.length) {
      const foundEntries = getDeckEntries(entries, id);
      setDeckSize(foundEntries.length);
    }
  }, [entries, id, getDeckEntries]);

  return (
    <div className="deck-div">
      {publicDeck ? (
        <Link to={`/public/${id}/entries`}>
          <p className="deck-div-title">{title.length >= 20 ? `${title.substring(0, 17)}...` : title}</p>
          <p className="deck-div-size">{deckSize} words</p>
        </Link>
      ) : (
        <Link to={`/${id}/entries`}>
          <p className="deck-div-title">{title.length >= 20 ? `${title.substring(0, 17)}...` : title}</p>
          <p className="deck-div-size">{deckSize} words</p>
        </Link>
      )}
    </div>
  );
}
