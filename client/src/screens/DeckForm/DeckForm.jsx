import "./DeckForm.css";
import { useState, useEffect } from "react"
import { useHistory, useParams } from "react-router-dom"

export default function DeckForm(props) {
  const { deck_id } = useParams();
  const { currentUser, createDeck, updateDeck, decks } = props
  const [formData, setFormData] = useState({
    title: "",
    user_id: currentUser.id
  })
  const { title } = formData
  const history = useHistory()
  
  useEffect(() => {
    const prefillFormData = () => {
      const oneDeck = decks.find((deck) => {
        return deck.id === Number(deck_id);
      })
      const { title, user_id } = oneDeck;
      setFormData({ title, user_id })
    }
    if (deck_id && decks.length) {
      prefillFormData();
    }
  }, [deck_id, decks])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = () => {
    if (!deck_id) {
      createDeck(formData);
      history.push("/")
    } else {
      updateDeck(deck_id, formData);
      history.push(`/${deck_id}/entries`)
    }
  }

  return (
    <>
      <h2>{deck_id ? "edit deck" : "create deck"}</h2>
      <form
        onSubmit={handleSubmit}
        className="deck-form-container"
      >
        <input
          required
          type="text"
          placeholder="deck title"
          name="title"
          value={title}
          onChange={handleChange}
          className="title-input"
        />
        {deck_id ? (
          <button
            type="submit"
            className="deck-submit"
          >
            UPDATE
          </button>
        ) : (
        <button type="submit" className="deck-submit">
          CREATE
        </button>
        )}
      </form>
      </>
  )
}