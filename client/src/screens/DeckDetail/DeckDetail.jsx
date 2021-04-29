import "./DeckDetail.css";
import Entry from "../../components/Entry/Entry"
import { useHistory } from "react-router";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function DeckDetail(props) {
  const [deck, setDeck] = useState(null);
  const [deckEntries, setDeckEntries] = useState([])
  const [toggleFetch, setToggleFetch] = useState(false)
  const history = useHistory();
  const { deck_id } = useParams();
  const {currentUser, decks, entries, getOneDeck, getDeckEntries, deleteEntry } = props;

  useEffect(() => {
    if (decks.length) {
      const oneDeck = getOneDeck(decks, deck_id);
      setDeck(oneDeck)
    }
  }, [decks, deck_id, toggleFetch]);

  useEffect(() => {
    if (entries.length) {
      const foundEntries = getDeckEntries(entries, deck_id)
      setDeckEntries(foundEntries)
    }
  }, [entries, deck_id, toggleFetch])

  const entriesJSX = deckEntries.map((entry, index) => (
    <Entry
      id={entry.id}
      term={entry.term}
      username={currentUser.username}
      key={index}
      deck_id={deck_id}
      deleteEntry={deleteEntry}
      setToggleFetch={setToggleFetch}
    />
  ));

  const studyDeck = () => {
    history.push(`/${deck_id}/study`);
  };

  return (
    <>
      <h2>{deck?.title}</h2>
      <button onClick={studyDeck} className="study-button">STUDY DECK</button>
      <div className="card-div">
        {deckEntries.length > 0 && entriesJSX}
        <div className="card"><Link to={`/${deck_id}/create-entry`} className="add-link">+ ADD CARD</Link></div>
      </div>
    </>
  );
}
