import "./EntryForm.css";
import { useEffect, useState } from "react";
import { useHistory, useParams, Link } from "react-router-dom";

export default function EntryForm(props) {
  const history = useHistory();
  const { deck_id, entry_id } = useParams();
  const {
    createEntry,
    updateEntry,
    removeEntry,
    entries
  } = props;
  const [formData, setFormData] = useState({
    term: "",
    details: "",
    deck_id: deck_id,
  });

  useEffect(() => {
    const prefillFormData = () => {
      const oneEntry = entries.find((entry) => {
        return entry.id === Number(entry_id);
      });
      const { term, details, deck_id } = oneEntry;
      setFormData({ term, details, deck_id });
    };
    if (entry_id && entries.length) {
      prefillFormData();
    }
  }, [entry_id, entries]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleReset = () => {
    setFormData({
      term: "",
      details: "",
      deck_id: deck_id,
    });
  };

  function handleDelete() {
    removeEntry(parseInt(entry_id));
    history.push(`/${deck_id}/entries`);
  }

  return (
    <>
      <Link
        to={`/${deck_id}/entries`}
        className="gray-link"
      >{`<<BACK TO DECK`}</Link>
      <h2>{entry_id ? "edit entry" : "create entry"}</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!entry_id) {
            createEntry(deck_id, formData);
            if (e.nativeEvent.submitter.value === "add") {
              handleReset();
              history.push(`/${deck_id}/create-entry`);
            } else {
              history.push(`/${deck_id}/entries`);
            }
          } else {
            updateEntry(entry_id, formData);
            history.push(`/${deck_id}/entries`);
          }
        }}
        className="entry-form-container flashcard-form"
      >
        <input
          required
          type="text"
          maxLength="60"
          placeholder="term"
          name="term"
          value={formData.term}
          onChange={handleChange}
          className="term-input"
          autocomplete="off"
        />
        <textarea
          required
          type="text"
          maxLength="200"
          placeholder="details"
          name="details"
          value={formData.details}
          onChange={handleChange}
          className="details-input"
          autocomplete="off"
        />
        {entry_id ? (
          <>
            <button
              type="submit"
              className="entry-update"
              value="save"
            >
              UPDATE
            </button>
          </>
        ) : (
          <>
            <button
              type="submit"
              className="entry-save"
              value="save"
            >
                SAVE
            </button>
              <button
              type="submit"
              className="add-card entry-add"
              value="add"
            >
              + ADD CARD
            </button>

          </>
        )}
      </form>
      {entry_id && (
        <button className="entry-delete delete-button" onClick={handleDelete}>
          DELETE
        </button>
      )}
    </>
  );
}
