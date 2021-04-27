import "./Navbar.css"
import { Link } from "react-router-dom"
import SignIn from "../../../screens/SignIn/SignIn"

export default function Navbar(props) {
  return (
    <div className="no-auth-nav">
      <Link to="sign-in"><SignIn /></Link>
    </div>
  )
}