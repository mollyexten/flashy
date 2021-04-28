import { Link } from "react-router-dom"

export default function AuthOptions(props) {
  return (
    <div className="auth-nav">
    <Link to="/flashcards">home</Link>
    <Link to="/flashcards/create-deck">create deck</Link>
    <a onClick={props.handleLogout}>sign out</a>
  </div>
  )
}