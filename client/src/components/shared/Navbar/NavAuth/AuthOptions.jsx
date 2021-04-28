import { Link } from "react-router-dom"

export default function AuthOptions(props) {
  return (
    <>
    <Link to="/">home</Link>
    <Link to="/create-deck">create deck</Link>
    <a onClick={props.handleLogout}>sign out</a>
  </>
  )
}