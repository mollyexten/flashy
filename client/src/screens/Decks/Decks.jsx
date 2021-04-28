import "./Decks.css";
import Deck from "../../components/Deck/Deck";

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
    <div>
      {decks.length > 0 && decksJSX}
      <div>ADD DECK</div>
    </div>
  ) 
}
