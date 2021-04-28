import { Link } from "react-router-dom"

export default function UnAuthOptions() {
  return (
    <div className="no-auth-nav">
    <Link to="/sign-in">sign in</Link>
    <Link to="/sign-up">sign up</Link>
  </div>
  )
}