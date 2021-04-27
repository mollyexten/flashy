// import { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Decks from "../../screens/Decks/Decks"
import DeckDetail from "../../screens/DeckDetail/DeckDetail"
import EntryDetail from "../../screens/EntryDetail/EntryDetail"
import DeckForm from "../../screens/DeckForm/DeckForm"
import EntryForm from "../../screens/EntryForm/EntryForm"

export default function Flashcard(props) {
  const { user } = props
  return (
    <>
      <Switch>
      <Route path="/flashcards/create-entry">
          <EntryForm user={user}/>
        </Route>
        <Route exact path="/flashcards/:deck_id/entries">
          <DeckDetail user={user}/>
        </Route>
        <Route path="/flashcards/entries/:entry_id">
          <EntryDetail user={user}/>
        </Route>
        <Route path="/flashcards/create-deck">
          <DeckForm user={user}/>
        </Route>
        <Route path="/flashcards/edit-entry">
          <EntryForm user={user}/>
        </Route>
        <Route exact path="/flashcards">
          <Decks user={user}/>
        </Route>
      </Switch>
    </>
  )
}