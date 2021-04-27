import "./EntryDetail.css";
import Layout from "../../components/shared/Layout/Layout"
import { useHistory } from "react-router";

export default function EntryDetail(props) {
  const history = useHistory()
  const redirect = (e) => {
    history.push("/flashcards/:deck_id/entries")
  }
  return (
    <Layout>
      <p>ENTRY DETAIL</p>
      <p className="term">
        TERM
      </p>
      <p>
        DETAILS
      </p>
      <button onClick={redirect}>
        BACK TO DECK
      </button>
    </Layout>
  )
}