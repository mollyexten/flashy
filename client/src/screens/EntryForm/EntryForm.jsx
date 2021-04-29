import "./EntryForm.css";
import { useState } from "react";
import { useHistory } from "react-router-dom";

export default function EntryForm(props) {
  const [entry, setEntry] = useState({
    term: "",
    details: "",
  });
  const history = useHistory()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEntry({
      ...entry,
      [name]: value,
    });
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
      <h2>entry form</h2>
      <form onSubmit={handleSubmit} className="entry-form-container">
        <input
          type="text"
          placeholder="term"
          name="term"
          value={entry.term}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="details"
          name="details"
          value={entry.details}
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
