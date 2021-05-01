import { Link } from "react-router-dom"

export default function AuthOptions(props) {
  const { handleClick, handleLogout, setHamburger, setVisible } = props
  const signOutAction = () => {
    handleLogout();
    setHamburger(curr => !curr)
    setVisible(curr => !curr)
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