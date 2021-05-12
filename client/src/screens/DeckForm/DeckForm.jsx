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
    publicDeck: false
  });
  const { title, publicDeck } = formData;
  const history = useHistory();
  const [disabled, setDisabled] = useState(true)

  // State and function for managing the popup component:
  const [isOpen, setIsOpen] = useState(false)
  const togglePopup = () => {
    setIsOpen(!isOpen)
  }

  // Get deck info if it will be edited
  useEffect(() => {
    const prefillFormData = () => {
      const oneDeck = decks.find((deck) => {
        return deck.id === Number(deck_id);
      });
      console.log(oneDeck.publicDeck)
      const { title, user_id, publicDeck } = oneDeck;
      setFormData({ title, user_id, publicDeck });
    };
    if (deck_id && decks.length) {
      prefillFormData();
    }
  }, [deck_id, decks]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(formData)
  };

  const handleKeyUp = () => {
    let empty = false
    const keys = Object.keys(formData)
    keys.forEach((key) => {
      !formData[key] && (empty = true);
    })
    empty ? setDisabled(true) : setDisabled(false)
  }

  const handleClick = () => {
    publicDeck = Boolean(!publicDeck)
  }

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
          createDeck(formData);
          // history.push("/");
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
          onKeyUp={handleKeyUp}
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
            value={Boolean(publicDeck)}
            // onChange={handleChange}
            onClick={handleClick}
            className="public-input"
          />
        </div>
        <button
          type="submit"
          className="save-changes deck-save"
          disabled={disabled}
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
