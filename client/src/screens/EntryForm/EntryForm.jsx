import "./EntryForm.css";
import { useState } from "react";
import { useHistory, useParams } from "react-router-dom";

export default function EntryForm(props) {
  const { deck_id } = useParams();
  const { currentUser, createEntry } = props
  
  const [formData, setFormData] = useState({
    term: "",
    details: "",
    deck_id: deck_id
  });
  const { term, details } = formData
  const history = useHistory()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (e.target.value === "add") {
      history.push("/flashcards/create-entry")
    } else {
      history.push("/flashcards/:deck_id/entries")
    }
  };

  return (
    <>
      <h2>create entry</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          createEntry(deck_id, formData)
          if (e.target.value === "add") {
            history.push(`/${deck_id}/create-entry`)
          } else {
            history.push(`/${deck_id}/entries`)
          }
        }}
        className="entry-form-container"
      >
        <input
          type="text"
          placeholder="term"
          name="term"
          value={term}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="details"
          name="details"
          value={details}
          onChange={handleChange}
        />
        <button type="submit" className="add-card" value="add">
          + ADD CARD
        </button>
        <button type="submit" className="save-deck" value="save">
          SAVE
        </button>
      </form>
    </>
  );
}
