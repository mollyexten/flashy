import { useState, useEffect } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import Decks from "../../screens/Decks/Decks";
import DeckDetail from "../../screens/DeckDetail/DeckDetail";
import EntryDetail from "../../screens/EntryDetail/EntryDetail";
import DeckForm from "../../screens/DeckForm/DeckForm";
import EntryForm from "../../screens/EntryForm/EntryForm";
import { createDeck, readAllDecks } from "../../services/decks";
import { readAllEntries } from "../../services/entries"

export default function Flashcard(props) {
  const [userDecks, setUserDecks] = useState([]);
  const [userEntries, setUserEntries] = useState([])
  const { currentUser } = props;

  useEffect(() => {
    const fetchDecks = async () => {
      const decks = await readAllDecks();
      setUserDecks(decks);
    };
    if (currentUser) {
      fetchDecks();
    }
  }, [currentUser]);

  useEffect(() => {
    const fetchEntries = async() => {
      const entries = await readAllEntries();
      setUserEntries(entries)
    }
    if (currentUser) {
      fetchEntries();
    }
  }, [currentUser])

  return (
    <>
      <Switch>
        <Route path="/create-entry">
          <EntryForm currentUser={currentUser} decks={userDecks} />
        </Route>
        <Route exact path="/:deck_id/entries">
          <DeckDetail currentUser={currentUser} decks={userDecks} entries={userEntries} />
        </Route>
        <Route path="/entries/:entry_id">
          <EntryDetail currentUser={currentUser} decks={userDecks} />
        </Route>
        <Route path="/create-deck">
          <DeckForm currentUser={currentUser} decks={userDecks} />
        </Route>
        <Route path="/edit-entry">
          <EntryForm currentUser={currentUser} decks={userDecks} />
        </Route>
        <Route exact path="/">
          <Decks currentUser={currentUser} decks={userDecks}/>
        </Route>
      </Switch>
    </>
  );
}
