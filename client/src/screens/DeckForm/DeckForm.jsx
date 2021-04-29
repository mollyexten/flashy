import "./DeckForm.css";
import { useState } from "react"
import { useHistory } from "react-router-dom"

export default function DeckForm(props) {
  const [deckTitle, setDeckTitle] = useState("")
  const history = useHistory()
  const handleChange = (e) => {
    setDeckTitle(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    history.push("/flashcards/create-entry")
  }
  return (
    <>
      <h2>create deck</h2>
      <form onSubmit={handleSubmit} className="deck-form-container">
        <input
          type="text"
          placeholder="deck title"
          value={deckTitle}
          onChange={handleChange}
          className="title-input"
        />
        <button type="submit" className="add-card deck-add-card">
          + ADD CARD
        </button>
      </form>
      </>
  )
}