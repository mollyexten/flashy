import { Link } from "react-router-dom"

export default function UnAuthOptions() {
  return (
  <>
    <Link to="/sign-in">sign in</Link>
    <Link to="/sign-up">sign up</Link>
  </>
  )
}