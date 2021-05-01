import { Link } from "react-router-dom"

export default function UnAuthOptions(props) {
  return (
  <>
    <Link to="/sign-in" className="nav-link" onClick={props.handleClick}>sign in</Link>
    <Link to="/sign-up" className="nav-link" onClick={props.handleClick}>sign up</Link>
  </>
  )
}