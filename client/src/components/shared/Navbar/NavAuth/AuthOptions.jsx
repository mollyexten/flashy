import { Link } from "react-router-dom"

export default function AuthOptions({ handleLogout }) {

  return (
    <>
      <Link
        to="/"
        className="nav-link" 
      >
        home
      </Link>
      <Link
        to="/my-decks"
        className="nav-link"
      >
        my decks
      </Link>
      <Link
        to="/create-deck"
        className="nav-link"
      >
        create deck
      </Link>
      <button
        onClick={handleLogout}
        className="nav-link sign-out"
      >
        sign out
      </button>
  </>
  )
}