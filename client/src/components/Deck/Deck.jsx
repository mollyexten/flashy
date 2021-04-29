import "./Deck.css";
import { Link } from "react-router-dom";

export default function Deck(props) {
  return (
    <div className="deck-div">
      <Link to={`/${props.id}/entries`}>
        <p className="deck-div-title">{props.title}</p>
        <p className="deck-div-username">{props.username}</p>
      </Link>
    </div>
  );
}
