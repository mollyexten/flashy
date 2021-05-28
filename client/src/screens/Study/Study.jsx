import "./Study.css";
import FlipCard from "../../components/FlipCard/FlipCard";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

export default function Study(props) {
  const { deck_id } = useParams();
  const { decks, entries, getOneDeck, getDeckEntries, publicDeck } = props;
  const [deck, setDeck] = useState(null);
  const [deckEntries, setDeckEntries] = useState([]);
  const [front, setFront] = useState(true);
  
  // I used this video to figure out the slider: https://www.youtube.com/watch?v=l1MYfu5YWHc
  // current is for the slideshow
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

  // nextSlide and prevSlide make slideshow possible
  const nextSlide = () => {
    setCurrent(current === deckEntries.length - 1 ? 0 : current + 1)
    setFront(true)
  }
  const prevSlide = () => {
    setCurrent(current === 0 ? deckEntries.length - 1 : current - 1)
    setFront(true)
  }

  // Each entry will be stored in a FlipCard
  const flipCardJSX = deckEntries.map((entry, index) => (
    <FlipCard
      term={entry.term}
      details={entry.details}
      key={index}
      index={index}
      current={current}
      deck={deckEntries}
      setFront={setFront}
      front={front}
    />
  ));

  return (
    <div className="study-div">
      <Link to={`/${deck_id}/entries`}><h2 className="study-title">{deck?.title}</h2></Link>
      <section className="arrow-card-arrow">
        <button className="left-arrow arrow" onClick={prevSlide}>{`<<`}</button>
        <div className="flipcard-container">
          {flipCardJSX}
        </div>
        <button className="right-arrow arrow" onClick={nextSlide}>{`>>`}</button>
      </section>
      {publicDeck ? (
        <Link to={`/public/${deck_id}/entries`} className="gray-link">
          {`<<back to deck`}
        </Link>  
      ) : (
          <button className="back-study">
            <Link to={`/${deck_id}/entries`} className="gray-link">
              {`<<back to deck`}
            </Link> 
          </button>
      )}
    </div>
  );
}
