import { useState, useEffect } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import Decks from "../../screens/Decks/Decks";
import DeckDetail from "../../screens/DeckDetail/DeckDetail";
import Study from "../../screens/Study/Study";
import DeckForm from "../../screens/DeckForm/DeckForm";
import EntryForm from "../../screens/EntryForm/EntryForm";
import {
  deleteDeck,
  postDeck,
  putDeck,
  readUserDecks,
  readPublicDecks
} from "../../services/decks";
import {
  deleteEntry,
  postEntry,
  putEntry,
  readUserEntries,
  readPublicEntries
} from "../../services/entries";

export default function Flashcard(props) {
  const [userDecks, setUserDecks] = useState([]);
  const [userEntries, setUserEntries] = useState([]);
  const [publicDecks, setPublicDecks] = useState([]);
  const [publicEntries, setPublicEntries] = useState([]);
  const { currentUser } = props;
  const history = useHistory();
  

  // All users can access the public decks
  const fetchPublicDecks = async () => {
    const decks = await readPublicDecks();
    // A logged in user won't see their own decks in the public section
    if (currentUser) {
      setPublicDecks(decks.filter(deck => deck.user_id !== currentUser.id))
    } else {
      setPublicDecks(decks)
    }
  };

  const fetchPublicEntries = async () => {
    const entries = await readPublicEntries();
    setPublicEntries(entries);
  };

  useEffect(() => {
    fetchPublicDecks();
    fetchPublicEntries();
  }, []);

  // For logged in users, the app will get all decks and entries,
  // find decks and entries belonging to the current user, and
  // store them in state as userDecks and userEntries
  const fetchMyDecks = async () => {
    const decks = await readUserDecks();
    setUserDecks(decks);
  };

  const fetchMyEntries = async () => {
    const entries = await readUserEntries();
    setUserEntries(entries);
  };
  
  useEffect(() => {
    if (currentUser) {
      fetchMyDecks();
    }
  }, [currentUser]);

  useEffect(() => {
    if (currentUser) {
      fetchMyEntries();
    }
  }, [currentUser]);

  // Full CRUD for the decks table (logged in users only)

  const getOneDeck = (decks, deck_id) => {
    const oneDeck = decks.find((deck) => deck.id === Number(deck_id));
    return oneDeck;
  };

  const createDeck = async (deckData) => {
    const newDeck = await postDeck(deckData);
    setUserDecks((prevState) => [...prevState, newDeck]);
    history.push(`/${newDeck.id}/create-entry`)
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

  // Full CRUD for the entries table

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
            <EntryForm
              createEntry={createEntry}
            />
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
              decks={userDecks}
              entries={userEntries}
              getOneDeck={getOneDeck}
              getDeckEntries={getDeckEntries}
            />
          </Route>
          <Route exact path="/public/:deck_id/entries">
            <DeckDetail
              decks={publicDecks}
              entries={publicEntries}
              publicDeck={"publicDeck"}
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
            
          <Route path="/public/:deck_id/study">
            <Study
              decks={publicDecks}
              entries={publicEntries}
              publicDeck="publicDeck"
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
          
          <Route path="/:username">
            <Decks
              currentUser={currentUser}
              decks={userDecks}
              entries={userEntries}
              getDeckEntries={getDeckEntries}
            />
          </Route>
          
          <Route exact path="/">
            <Decks
              currentUser={currentUser}
              publicDeck={"publicDeck"}
              getDeckEntries={getDeckEntries}
              decks={publicDecks}
              entries={publicEntries}
            />
          </Route>
        
        </Switch>
      </>
    );
  }
