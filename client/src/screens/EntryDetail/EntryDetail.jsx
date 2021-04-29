import "./EntryDetail.css";
import FlipCard from "../../components/FlipCard/FlipCard"
import { useState, useEffect } from "react"
import { useHistory } from "react-router";
import { useParams } from "react-router-dom"

export default function EntryDetail(props) {
  const { deck_id } = useParams();
  const history = useHistory()
  const { currentUser, decks, entries, getOneDeck, getDeckEntries } = props
  const [deck, setDeck] = useState(null)
  const [deckEntries, setDeckEntries] = useState([])

  useEffect(() => {
    if (decks.length) {
      const oneDeck = getOneDeck(decks, deck_id);
      setDeck(oneDeck)
    }
  }, [decks, deck_id]);

  useEffect(() => {
    if (entries.length) {
      const foundEntries = getDeckEntries(entries, deck_id)
      setDeckEntries(foundEntries)
    }
  }, [entries, deck_id])

  const flipCardJSX = deckEntries.map((entry, index) => (
    <FlipCard
      entry_id={entry.id}
      term={entry.term}
      details={entry.details}
      username={currentUser.username}
      deck_id={deck_id}
      key={index}
    />
  ));

  const redirect = () => {
    history.push(`/${deck_id}/entries`)
  }
  return (
    <>
      <h2>{deck?.title}</h2>
      <div className="flipcard-container">
        {flipCardJSX}
      </div>
      <button onClick={redirect}>
        BACK TO DECK
      </button>
    </>
  )
}