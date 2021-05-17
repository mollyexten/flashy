import "./Popup.css";
import { useHistory } from "react-router-dom"

export default function Popup(props) {
  const history = useHistory();
  // This guide helped me figure out popups
  // https://www.cluemediator.com/create-simple-popup-in-reactjs
  const {
    message,
    cancel,
    removeDeck,
    deck_id,
    removeEntry,
    entry_id,
    username
  } = props

  const confirm = () => {
    if (deck_id && removeDeck) {
      removeDeck(parseInt(deck_id));
      history.push(`/${username}`);
    }
    if (entry_id && removeEntry) {
      removeEntry(parseInt(entry_id))
      history.push(`/${deck_id}/entries`)
    }
  }

  return (
    <div className="popup-cover">
      <div className="popup-box">
        <p className="popup-message">{message}</p>
        <div className="popup-buttons">
          <button className="popup-cancel" onClick={cancel}>cancel</button>
          <button className="popup-confirm" onClick={confirm}>confirm</button>
        </div>
      </div>
    </div>
  )
}