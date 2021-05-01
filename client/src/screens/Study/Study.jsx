import "./Study.css";
import FlipCard from "../../components/FlipCard/FlipCard";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

export default function Study(props) {
  const { deck_id } = useParams();
  const { decks, entries, getOneDeck, getDeckEntries } = props;
  const [deck, setDeck] = useState(null);
  const [deckEntries, setDeckEntries] = useState([]);
  // current is for the slideshow
  const [current, setCurrent] = useState(0);
  // I used this video to figure out the slider: https://www.youtube.com/watch?v=l1MYfu5YWHc

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
      deck={deckEntries}
    />
  ));

  return (
    <div className="study-div">
      <h2>{deck?.title}</h2>
      <section className="arrow-card-arrow">
        {/* <button className="left-arrow arrow" onClick={prevSlide}>←</button> */}
        <button className="left-arrow arrow" onClick={prevSlide}>{`<<`}</button>
        <div className="flipcard-container">
          {flipCardJSX}
        </div>
        {/* <button className="right-arrow arrow" onClick={nextSlide}>→</button> */}
        <button className="right-arrow arrow" onClick={nextSlide}>{`>>`}</button>
      </section>
      <Link to={`/${deck_id}/entries`} className="gray-link">
        {`<<BACK TO DECK`}
      </Link>
    </div>
  );
}
