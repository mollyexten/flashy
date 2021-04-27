import "./DeckDetail.css";
import Layout from "../../components/shared/Layout/Layout"
import { useHistory } from "react-router";

export default function DeckDetail(props) {
  const history = useHistory()
  const studyDeck = (e) => {
    history.push("/flashcards/entries/:entry_id")
  }
  return (
    <Layout>
      <p>DECK DETAIL</p>
      <button onClick={studyDeck}>STUDY DECK</button>
    </Layout>
  )
}