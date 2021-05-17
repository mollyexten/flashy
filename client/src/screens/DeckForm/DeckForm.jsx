import "./DeckForm.css";
import Popup from "../../components/Popup/Popup"

import { useState, useEffect } from "react";
import { useHistory, useParams, Link } from "react-router-dom";

export default function DeckForm(props) {
  const { deck_id } = useParams();
  const {
    currentUser,
    createDeck,
    updateDeck,
    removeDeck,
    decks
  } = props;
  const [formData, setFormData] = useState({
    title: "",
    user_id: currentUser.id,
    publicDeck: false,
    author: currentUser.username
  });
  const { title, publicDeck } = formData;
  const history = useHistory();

  // State and function for managing the popup component:
  const [isOpen, setIsOpen] = useState(false)
  const togglePopup = () => {
    setIsOpen(!isOpen)
  }

  console.log(formData)

  // Get deck info if it will be edited
  useEffect(() => {
    const prefillFormData = () => {
      const oneDeck = decks.find((deck) => {
        return deck.id === Number(deck_id);
      });
      const { title, user_id, publicDeck, author } = oneDeck;
      setFormData({ title, user_id, publicDeck, author });
    };
    if (deck_id && decks.length) {
      prefillFormData();
    }
  }, [deck_id, decks]);

  const handleChange = (e) => {
    const { name, type } = e.target;
    const value = type === 'checkbox' ? e.target.checked : e.target.value;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <>
      {deck_id ? (
        <Link
        to={`/${deck_id}/entries`}
        className="gray-link"
      >
        {`<<BACK TO DECK`}
      </Link>
      ) : (
        <Link
        to={`/`}
        className="gray-link"
      >
        {`<<BACK TO DECKS`}
      </Link>
      )}
      
      <h2>
        {deck_id ? "rename deck" : "create deck"}
      </h2>
      <form onSubmit={(e) => {
        e.preventDefault();
        if (!deck_id) {
          console.log(formData)
          createDeck(formData);
        } else {
          updateDeck(deck_id, formData);
          history.push(`/${deck_id}/entries`);
        }
      }} className="deck-form-container flashcard-form">
        <input
          required
          type="text"
          maxLength="50"
          placeholder="deck title"
          name="title"
          value={title}
          onChange={handleChange}
          className="title-input"
          autoComplete="off"
        />
        <div className="checkbox-section">
          <label
            htmlFor="publicDeck"
            className="public-input"
          >
            Make deck public?
          </label>
          <input
            type="checkbox"
            id="publicDeck"
            name="publicDeck"
            checked={Boolean(publicDeck)}
            onChange={handleChange}
            className="public-input"
          />
        </div>
        <button
          type="submit"
          className="save-changes deck-save"
        >
          {deck_id ? "UPDATE" : "CREATE"}
        </button>
      </form>
      {deck_id && (
        <button
          className="deck-delete-button delete-button"
          onClick={togglePopup}
        >
          DELETE
        </button>
      )}
      {isOpen && (
        <Popup
          message={"Are you sure you want to delete this deck?"}
          cancel={togglePopup}
          removeDeck={removeDeck}
          deck_id={parseInt(deck_id)}
        />
      )}
    </>
  );
}
