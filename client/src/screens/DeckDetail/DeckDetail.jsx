import "./DeckDetail.css";
import { useHistory } from "react-router";

export default function DeckDetail(props) {
  const history = useHistory()
  const studyDeck = (e) => {
    history.push("/flashcards/entries/:entry_id")
  }
  return (
    <>
      <p>DECK DETAIL</p>
      <button onClick={studyDeck}>STUDY DECK</button>
    </>
  )
}