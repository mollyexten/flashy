import { Link } from "react-router-dom"

export default function AuthOptions(props) {
  return (
    <>
    <Link to="/" className="nav-link">home</Link>
    <Link to="/create-deck" className="nav-link">create deck</Link>
    <button onClick={props.handleLogout} className="nav-link sign-out">sign out</button>
  </>
  )
}