import "./EntryForm.css";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

export default function EntryForm(props) {
  const history = useHistory();
  const { deck_id, entry_id } = useParams();
  const { createEntry, updateEntry, entries } = props;
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

  return (
    <>
      <h2>{entry_id ? "edit entry" : "create entry"}</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!entry_id) {
            createEntry(deck_id, formData);
            if (e.target.value === "add") {
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
          type="text"
          placeholder="term"
          name="term"
          value={formData.term}
          onChange={handleChange}
          className="term-input"
        />
        <input
          type="text"
          placeholder="details"
          name="details"
          value={formData.details}
          onChange={handleChange}
          className="details-input"
        />
        {entry_id ? (
          <button type="submit" className="save-entry button-one" value="save">
            SAVE
          </button>
        ) : (
          <>
            <button
              type="submit"
              className="add-card entry-form-add button-one"
              value="add"
            >
              {" "}
              + ADD CARD{" "}
            </button>
            <button
              type="submit"
              className="save-entry button-two"
              value="save"
            >
              SAVE
            </button>
          </>
        )}
      </form>
    </>
  );
}
