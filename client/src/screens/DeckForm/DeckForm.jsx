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
      <p>DECK FORM</p>
      <form onSubmit={handleSubmit} className="deck-form-container">
        <input
          type="text"
          placeholder="deck title"
          value={deckTitle}
          onChange={handleChange}
        />
        <button type="submit" className="add-card">
          + ADD CARD
        </button>
      </form>
      </>
  )
}