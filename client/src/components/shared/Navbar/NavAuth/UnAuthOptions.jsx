import { Link } from "react-router-dom"

export default function UnAuthOptions() {
  return (
  <>
      <Link
        to="/sign-in"
        className="nav-link"
      >
        sign in
      </Link>
      <Link
        to="/sign-up"
        className="nav-link"
      >
        sign up
      </Link>
  </>
  )
}