import "./DeckDetail.css";
import { useHistory } from "react-router";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function DeckDetail(props) {
  const [deck, setDeck] = useState(null)
  const history = useHistory()
  const { deck_id } = useParams();
  const { currentUser, decks } = props

  // const foundDeck = decks.find((deck) => (
  //   deck.id === deck_id))

  useEffect(() => {
    if (decks) {
      const oneDeck = decks.find((deck) => deck.id === Number(deck_id))
      setDeck(oneDeck)
    }
  }, [decks, deck_id])

  const studyDeck = (e) => {
    history.push("/flashcards/entries/:entry_id")
  }
  return (
    <>
      <h2>{deck.title}</h2>
      <button onClick={studyDeck}>STUDY DECK</button>
    </>
  )
}