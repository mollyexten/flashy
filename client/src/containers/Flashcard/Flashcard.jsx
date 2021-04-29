import { useState, useEffect } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import Decks from "../../screens/Decks/Decks";
import DeckDetail from "../../screens/DeckDetail/DeckDetail";
import EntryDetail from "../../screens/EntryDetail/EntryDetail";
import DeckForm from "../../screens/DeckForm/DeckForm";
import EntryForm from "../../screens/EntryForm/EntryForm";
import { postDeck, readAllDecks } from "../../services/decks";
import { postEntry, readAllEntries } from "../../services/entries"

export default function Flashcard(props) {
  const [userDecks, setUserDecks] = useState([]);
  const [userEntries, setUserEntries] = useState([])
  const { currentUser } = props;

  useEffect(() => {
    if (currentUser) {
      fetchDecks();
    }
  }, [currentUser]);
  
  useEffect(() => {
    if (currentUser) {
      fetchEntries();
    }
  }, [currentUser])
  
  const fetchDecks = async () => {
    const decks = await readAllDecks();
    setUserDecks(decks);
  };
  
  const getOneDeck = (decks, deck_id) => {
    const oneDeck = decks.find((deck) => deck.id === Number(deck_id));
    return oneDeck;
  }

  const createDeck = async (deckData) => {
    const newDeck = await postDeck(deckData);
    setUserDecks(prevState => ([
      ...prevState,
      newDeck
    ]))
  }
  
  const fetchEntries = async () => {
    const entries = await readAllEntries();
    setUserEntries(entries)
  }

  const getDeckEntries = (entries, deck_id) => {
    const deckEntries = entries.filter((entry) => entry.deck_id === Number(deck_id))
    return deckEntries;
  }

  const createEntry = async (deck_id, entryData) => {
    const newEntry = await postEntry(deck_id, entryData);
    setUserEntries(prevState => ([
      ...prevState,
      newEntry
    ]))
  }

  return (
    <>
      <Switch>
        <Route path="/:deck_id/create-entry">
          <EntryForm
            currentUser={currentUser}
            createEntry={createEntry}
          />
        </Route>
        <Route exact path="/:deck_id/entries">
          <DeckDetail
            currentUser={currentUser}
            decks={userDecks}
            entries={userEntries}
            getOneDeck={getOneDeck}
            getDeckEntries={getDeckEntries}
          />
        </Route>
        <Route path="/:deck_id/study">
          <EntryDetail
            currentUser={currentUser}
            decks={userDecks}
            entries={userEntries}
            getOneDeck={getOneDeck}
            getDeckEntries={getDeckEntries}
          />
        </Route>
        <Route path="/create-deck">
          <DeckForm
            currentUser={currentUser}
            setUserDecks={setUserDecks}
            createDeck={createDeck}
          />
        </Route>
        <Route path="/edit-entry">
          <EntryForm
            currentUser={currentUser}
          />
        </Route>
        <Route exact path="/">
          <Decks
            currentUser={currentUser}
            decks={userDecks}
          />
        </Route>
      </Switch>
    </>
  );
}
