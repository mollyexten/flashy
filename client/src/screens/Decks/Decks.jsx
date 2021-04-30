import "./Decks.css";
import Deck from "../../components/Deck/Deck";
import { Link } from "react-router-dom"

export default function Decks(props) {
  const { currentUser, decks } = props;
  const decksJSX = decks.map((deck, index) => (
    <Deck
      id={deck.id}
      title={deck.title}
      username={currentUser.username}
      key={index}
    />
  ));

  return (
    <>
    <h2>{`welcome, ${currentUser?.username}`}!</h2>
    <section className="card-div">
      {decks.length > 0 && decksJSX}
        <div className="card">
          <Link
            to="/create-deck"
            className="add-link"
          >
            + ADD DECK
          </Link>
        </div>
      </section>
      </>
  ) 
}
