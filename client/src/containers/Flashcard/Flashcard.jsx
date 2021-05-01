import { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Decks from "../../screens/Decks/Decks";
import DeckDetail from "../../screens/DeckDetail/DeckDetail";
import Study from "../../screens/Study/Study";
import DeckForm from "../../screens/DeckForm/DeckForm";
import EntryForm from "../../screens/EntryForm/EntryForm";
import {
  deleteDeck,
  postDeck,
  putDeck,
  readAllDecks
} from "../../services/decks";
import {
  deleteEntry,
  postEntry,
  putEntry,
  readAllEntries,
} from "../../services/entries";

export default function Flashcard(props) {
  const [userDecks, setUserDecks] = useState([]);
  const [userEntries, setUserEntries] = useState([]);
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
  }, [currentUser]);

  const fetchDecks = async () => {
    const decks = await readAllDecks();
    setUserDecks(decks);
  };

  const getOneDeck = (decks, deck_id) => {
    const oneDeck = decks.find((deck) => deck.id === Number(deck_id));
    return oneDeck;
  };

  const createDeck = async (deckData) => {
    const newDeck = await postDeck(deckData);
    setUserDecks((prevState) => [...prevState, newDeck]);
  };

  const updateDeck = async (id, data) => {
    const updatedDeck = await putDeck(id, data);
    setUserDecks((prevState) =>
      prevState.map((deck) => {
        return deck.id === Number(id) ? updatedDeck : deck;
    }))
  }

  const removeDeck = async (id) => {
    await deleteDeck(id);
    setUserDecks((prevState) => prevState.filter((deck) => deck.id !== id));
    setUserEntries((prevState) => prevState.filter((entry) => entry.deck_id !== id))
  };

  const fetchEntries = async () => {
    const entries = await readAllEntries();
    setUserEntries(entries);
  };

  const getDeckEntries = (entries, deck_id) => {
    const deckEntries = entries.filter(
      (entry) => entry.deck_id === Number(deck_id)
    );
    return deckEntries;
  };

  const createEntry = async (deck_id, entryData) => {
    const newEntry = await postEntry(deck_id, entryData);
    setUserEntries((prevState) => [...prevState, newEntry]);
  };

  const updateEntry = async (id, data) => {
    const updatedEntry = await putEntry(id, data);
    setUserEntries((prevState) =>
      prevState.map((entry) => {
        return entry.id === Number(id) ? updatedEntry : entry;
      }));
  };

  const removeEntry = async (id) => {
    await deleteEntry(id);
    setUserEntries((prevState) => prevState.filter((entry) => entry.id !== id));
  };

    return (
      <>
        <Switch>
          <Route path="/:deck_id/create-entry">
            <EntryForm createEntry={createEntry} />
          </Route>
          <Route path="/:deck_id/edit-entry/:entry_id">
            <EntryForm
              updateEntry={updateEntry}
              entries={userEntries}
              removeEntry={removeEntry}
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
            <Study
              decks={userDecks}
              entries={userEntries}
              getOneDeck={getOneDeck}
              getDeckEntries={getDeckEntries}
            />
          </Route>
          <Route path="/create-deck">
            <DeckForm
              currentUser={currentUser}
              createDeck={createDeck}
            />
          </Route>
          <Route path="/edit-deck/:deck_id">
            <DeckForm
              currentUser={currentUser}
              updateDeck={updateDeck}
              removeDeck={removeDeck}
              decks={userDecks}
            />
          </Route>
          <Route exact path="/">
            <Decks
              currentUser={currentUser}
              decks={userDecks}
              entries={userEntries}
              getDeckEntries={getDeckEntries}
            />
          </Route>
        </Switch>
      </>
    );
  }
