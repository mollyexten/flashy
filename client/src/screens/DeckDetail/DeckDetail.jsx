import "./DeckDetail.css";
import Entry from "../../components/Entry/Entry";
import { useHistory } from "react-router";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function DeckDetail(props) {
  const [deck, setDeck] = useState(null);
  const [deckEntries, setDeckEntries] = useState([]);
  const history = useHistory();
  const { deck_id } = useParams();
  const {
    decks,
    entries,
    getOneDeck,
    getDeckEntries,
    publicDeck,
  } = props;

  // Get specific info on the deck and its entries with useEffects
  useEffect(() => {
    if (decks.length) {
      const oneDeck = getOneDeck(decks, deck_id);
      setDeck(oneDeck);
    }
  }, [decks, deck_id, getOneDeck]);

  useEffect(() => {
    if (entries.length) {
      const foundEntries = getDeckEntries(entries, deck_id);
      setDeckEntries(foundEntries);
    }
  }, [entries, deck_id, getDeckEntries]);

  // Map out all entries, pass them into Entry component, and store as variable entriesJSX to use in the JSX part 
  const entriesJSX = deckEntries.map((entry, index) => (
    <Entry
      id={entry.id}
      term={entry.term}
      details={entry.details}
      key={index}
      deck_id={deck_id}
      publicDeck={publicDeck}
    />
  ));

  const studyDeck = () => {
    publicDeck ? history.push(`/public/${deck_id}/study`) : history.push(`/${deck_id}/study`);
  };

  return (
    <>
      <div className="deck-study">
        <h1 className="deck-header">{deck?.title}</h1>
          {publicDeck && (
            <p>A deck by {deck?.author}</p>
        )}
        {deckEntries.length > 0 && (
        <button onClick={studyDeck} className="study-button">
          STUDY DECK
        </button>
      )}
      </div>

      <section className="card-div">
        {deckEntries.length > 0 && entriesJSX}
      {!publicDeck && (
                <div className="card">
          <Link to={`/${deck_id}/create-entry`} className="add-link">
            + ADD CARD
          </Link>
        </div>
      )}
      </section>
      {!publicDeck && (
        <Link to={`/edit-deck/${deck_id}`} className="gray-link">
          rename/delete deck
        </Link>)}
    </>
  );
}
