import "./Deck.css";
import { Link } from "react-router-dom";

export default function Deck(props) {
  return (
    <div>
      <Link to={`/${props.id}/entries`}>
        <p>{props.title}</p>
        <p>{props.username}</p>
      </Link>
    </div>
  );
}
