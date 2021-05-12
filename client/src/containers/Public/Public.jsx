import { useState, useEffect } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import Decks from "../../screens/Decks/Decks";
import DeckDetail from "../../screens/DeckDetail/DeckDetail";
import Study from "../../screens/Study/Study";
import {
  readPublicDecks
} from "../../services/decks";
import {
  readPublicEntries
} from "../../services/entries";

export default function Public(props) {
  const [publicDecks, setPublicDecks] = useState([]);
  const [publicEntries, setPublicEntries] = useState([]);
  const { currentUser } = props;
  const history = useHistory();

  const fetchDecks = async () => {
    const decks = await readPublicDecks();
    setPublicDecks(decks);
  };

  const fetchEntries = async () => {
    const entries = await readPublicEntries();
    setPublicEntries(entries);
  };

  useEffect(() => {
    fetchDecks();
    fetchEntries();
  }, []);

  const getOneDeck = (decks, deck_id) => {
    const oneDeck = decks.find((deck) => deck.id === Number(deck_id));
    return oneDeck;
  };

  const getDeckEntries = (entries, deck_id) => {
    const deckEntries = entries.filter(
      (entry) => entry.deck_id === Number(deck_id)
    );
    return deckEntries;
  };

  return (
    <Route exact path="/">
      <Decks
        currentUser={currentUser}
        decks={publicDecks}
        entries={publicEntries}
        getDeckEntries={getDeckEntries}
      />
  </Route>
  )

}