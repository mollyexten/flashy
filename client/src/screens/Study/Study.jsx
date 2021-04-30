import "./Study.css";
import FlipCard from "../../components/FlipCard/FlipCard";
import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { useParams } from "react-router-dom";

export default function Study(props) {
  const { deck_id } = useParams();
  const history = useHistory();
  const { decks, entries, getOneDeck, getDeckEntries } = props;
  const [deck, setDeck] = useState(null);
  const [deckEntries, setDeckEntries] = useState([]);
  const [current, setCurrent] = useState(0);

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

  const nextSlide = () => {
    setCurrent(current === deckEntries.length - 1 ? 0 : current + 1)
  }
  const prevSlide = () => {
    setCurrent(current === 0 ? deckEntries.length - 1 : current - 1)
  }
  const flipCardJSX = deckEntries.map((entry, index) => (
    <FlipCard
      term={entry.term}
      details={entry.details}
      key={index}
      index={index}
      current={current}
    />
  ));

  const redirect = () => {
    history.push(`/${deck_id}/entries`);
  };

  return (
    <>
      <h2>{deck?.title}</h2>
      <section className="study-container">
      <button className="left-arrow arrow" onClick={prevSlide}>←</button>
        <div className="flipcard-container">
          {flipCardJSX}
        </div>
        <button className="right-arrow arrow" onClick={nextSlide}>→</button>
        <button onClick={redirect}>
          BACK TO DECK
        </button>
      </section>
    </>
  );
}
