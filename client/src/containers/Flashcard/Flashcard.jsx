import { useState, useEffect } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import Decks from "../../screens/Decks/Decks"
import DeckDetail from "../../screens/DeckDetail/DeckDetail"
import EntryDetail from "../../screens/EntryDetail/EntryDetail"
import DeckForm from "../../screens/DeckForm/DeckForm"
import EntryForm from "../../screens/EntryForm/EntryForm"
import { createDeck, readAllDecks, readOneDeck} from "../../services/decks"

export default function Flashcard(props) {
  const [decks, setDecks] = useState([])
  const history = useHistory();
  const { currentUser } = props;
  console.log(currentUser)

  useEffect(() => {
    const fetchDecks = async () => {
      const decks = await readAllDecks();
      setDecks(decks)
    }
    fetchDecks();
  }, [])

  return (
    <>
      <Switch>
      <Route path="/flashcards/create-entry">
          <EntryForm currentUser={currentUser} decks={decks}/>
        </Route>
        <Route exact path="/flashcards/:deck_id/entries">
          <DeckDetail currentUser={currentUser} decks={decks}/>
        </Route>
        <Route path="/flashcards/entries/:entry_id">
          <EntryDetail currentUser={currentUser} decks={decks}/>
        </Route>
        <Route path="/flashcards/create-deck">
          <DeckForm currentUser={currentUser} decks={decks}/>
        </Route>
        <Route path="/flashcards/edit-entry">
          <EntryForm currentUser={currentUser} decks={decks}/>
        </Route>
        <Route exact path="/flashcards">
          <Decks currentUser={currentUser} decks={decks}/>
        </Route>
      </Switch>
    </>
  )
}