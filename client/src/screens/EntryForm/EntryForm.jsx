import "./EntryForm.css";
import Popup from "../../components/Popup/Popup"

import { useEffect, useState } from "react";
import { useHistory, useParams, Link } from "react-router-dom";

export default function EntryForm(props) {
  const history = useHistory();
  const { deck_id, entry_id } = useParams();
  const {
    createEntry,
    decks,
    getOneDeck,
    updateEntry,
    removeEntry,
    entries
  } = props;
  const [formData, setFormData] = useState({
    term: "",
    details: "",
    deck_id: deck_id,
  });

  // State and function for managing the popup component:
  const [isOpen, setIsOpen] = useState(false)
  const togglePopup = () => {
    setIsOpen(!isOpen)
  }

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
        className="entry-form-container"
      >
        <input
          required
          type="text"
          maxLength="50"
          placeholder="term"
          name="term"
          value={formData.term}
          onChange={handleChange}
          className="term-input"
          autoComplete="off"
        />
        <textarea
          required
          type="text"
          maxLength="180"
          placeholder="details"
          name="details"
          value={formData.details}
          onChange={handleChange}
          className="details-input"
          autoComplete="off"
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
        <button className="entry-delete delete-button" onClick={togglePopup}>
          DELETE
        </button>
      )}
      {isOpen && (
        <Popup
          message={"Are you sure you want to delete this entry?"}
          cancel={togglePopup}
          removeEntry={removeEntry}
          entry_id={parseInt(entry_id)}
          deck_id={deck_id}
        />
      )}
    </>
  );
}
