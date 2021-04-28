import "./Decks.css";
import { useHistory } from "react-router-dom";

export default function Decks(props) {
  const { decks, currentUser } = props;
  const history = useHistory();
  console.log(decks);
  return (
    <>
      DECKS
    </>
  )
}