import "./Decks.css";
import Deck from "../../components/Deck/Deck";
import { Link, useParams } from "react-router-dom";

export default function Decks(props) {
  const {
    currentUser,
    decks,
    entries,
    getDeckEntries,
    publicDeck,
  } = props;
  const { username } = useParams()

  //  Map out all decks, pass their info into Deck component, and use in JSX below
  const decksJSX = decks.map((deck, index) => (
    <Deck
      id={deck.id}
      title={deck.title}
      author={deck.author}
      currentUser={currentUser}
      publicDeck={publicDeck}
      key={index}
      entries={entries}
      getDeckEntries={getDeckEntries}
    />
  ));

  return (
    <>
<<<<<<< HEAD
      <div className="welcome-banner">
        <img src="flashy-1.svg" alt="triangle-circle" className="triangle-circle"/>
        {currentUser ? (
          <h2 className="welcome-header">{`welcome, ${currentUser?.username}`}!</h2>
        ) : (
          <h2 className="welcome-header">welcome to flashy, a flashcard app!</h2>
        )}
        <img src="flashy-2.svg" alt="black-dots" className="black-dots"/>
      </div>
      {!username && (<h3 className = "deck-list-header">Check out what people are studying:</h3>)
}

      <section className="card-div">
        {decks.length > 0 && decksJSX}
        {
          username && (
            <div className="card add-deck">
              <Link to="/create-deck" className="add-link">
                + ADD DECK
              </Link>
            </div>
        )}  
      </section>
=======
      {currentUser ? (
        <>
          <h2>{`welcome, ${currentUser?.username}`}!</h2>
          <h3>Check out what other users are studying:</h3>
        </>
      ) : (
        <>
          <h2>welcome to flashy, the flashcard app!</h2>
          <h3>Check out what people are studying:</h3>
        </>
      )}
      {decks.length ? (
        <section className="card-div">
          {decks.length > 0 && decksJSX}
            {
              username && (
                <div className="card">
                  <Link to="/create-deck" className="add-link">
                    + ADD DECK
                  </Link>
                </div>
            )
          }
        </section>
      ) : (
          <section>
            Loading decks...
        </section>
      )
      }

>>>>>>> f3328f12d7cc2163d2c1b16f63d85c4d08b6bbfb
    </>
  );
}
