import "./DeckForm.css";
import { useState } from "react"
import { useHistory } from "react-router-dom"

export default function DeckForm(props) {
  const { currentUser, createDeck, setUserDecks } = props
  const [formData, setFormData] = useState({
    title: "",
    user_id: currentUser.id
  })
  const { title, user_id } = formData
  const history = useHistory()
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <>
      <h2>create deck</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          createDeck(formData);
          history.push("/")
        }}
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
        <button type="submit" className="deck-submit">
          CREATE
        </button>
      </form>
      </>
  )
}