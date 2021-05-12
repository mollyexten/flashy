import "./Decks.css";
import Deck from "../../components/Deck/Deck";
import { Link, useParams } from "react-router-dom";

export default function Decks(props) {
  const { currentUser, decks, entries, getDeckEntries } = props;
  const params = useParams()
  console.log(params)

  //  Map out all decks, pass their info into Deck component, and use in JSX below
  const decksJSX = decks.map((deck, index) => (
    <Deck
      id={deck.id}
      title={deck.title}
      // username={currentUser.username}
      key={index}
      entries={entries}
      getDeckEntries={getDeckEntries}
    />
  ));

  return (
    <>
      {currentUser ? (
        <h2>{`welcome, ${currentUser?.username}`}!</h2>
      ) : (
        <h2>"welcome to flashy, the flashcard app!"</h2>
      )}
      <section className="card-div">
        {decks.length > 0 && decksJSX}
          <div className="card">
          <Link to="/create-deck" className="add-link">
            + ADD DECK
          </Link>
        </div>
      </section>
    </>
  );
}
