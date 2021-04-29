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
  const [decks, setDecks] = useState([]);
  const [allEntries, setAllEntries] = useState([])
  const { currentUser } = props;

  useEffect(() => {
    const fetchDecks = async () => {
      const decks = await readAllDecks();
      setDecks(decks);
    };
    if (currentUser) {
      fetchDecks();
    }
  }, [currentUser]);

  useEffect(() => {
    const fetchEntries = async() => {
      const entries = await readAllEntries();
      setAllEntries(entries)
      console.log(entries)
    }
    if (currentUser) {
      fetchEntries();
    }
  }, [currentUser])

  console.log(allEntries)

  return (
    <>
      <Switch>
        <Route path="/create-entry">
          <EntryForm currentUser={currentUser} decks={decks} />
        </Route>
        <Route exact path="/:deck_id/entries">
          <DeckDetail currentUser={currentUser} decks={decks} entries={entries} />
        </Route>
        <Route path="/entries/:entry_id">
          <EntryDetail currentUser={currentUser} decks={decks} />
        </Route>
        <Route path="/create-deck">
          <DeckForm currentUser={currentUser} decks={decks} />
        </Route>
        <Route path="/edit-entry">
          <EntryForm currentUser={currentUser} decks={decks} />
        </Route>
        <Route exact path="/">
          <Decks currentUser={currentUser} decks={decks}/>
        </Route>
      </Switch>
    </>
  );
}
