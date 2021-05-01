import { Link } from "react-router-dom"

export default function AuthOptions(props) {
  const { handleClick, handleLogout } = props
  const signOutAction = () => {
    handleLogout();
    handleClick();
  }
  return (
    <>
      <Link
        to="/"
        className="nav-link" 
        onClick={handleClick}
      >
        home
      </Link>
      <Link
        to="/create-deck"
        className="nav-link"
        onClick={handleClick}
      >
        create deck
      </Link>
      <button
        onClick={signOutAction} className="nav-link sign-out">sign out</button>
  </>
  )
}