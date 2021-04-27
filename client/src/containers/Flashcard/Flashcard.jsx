// import { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Decks from "../../screens/Decks/Decks"
import DeckDetail from "../../screens/DeckDetail/DeckDetail"
import EntryDetail from "../../screens/EntryDetail/EntryDetail"
import DeckForm from "../../screens/DeckForm/DeckForm"
import EntryForm from "../../screens/EntryForm/EntryForm"

export default function Flashcard() {
  return (
    <>
      <Switch>
      <Route path="/flashcards/create-entry">
          <EntryForm />
        </Route>
        <Route exact path="/flashcards/:deck_id/entries">
          <DeckDetail />
        </Route>
        <Route path="/flashcards/entries/:entry_id">
          <EntryDetail />
        </Route>
        <Route path="/flashcards/create-deck">
          <DeckForm />
        </Route>
        <Route path="/flashcards/edit-entry">
          <EntryForm />
        </Route>
        <Route exact path="/flashcards">
          <Decks />
        </Route>
      </Switch>
    </>
  )
}