import "./SignUp.css";
import { useState } from "react";
import { Link, Redirect } from "react-router-dom"
// import { useLocation } from "react-router-dom"

export default function SignUp(props) {
  // const location = useLocation()
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [disabled, setDisabled] = useState(false)

  const { username, email, password } = formData
  const { handleRegister, currentUser } = props

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  const handleKeyUp = () => {
    let empty = false;
    const keys = Object.keys(formData)
    keys.forEach((key) => {
      if (formData[key] === "") {
        empty = true;
      }
    })
    if (empty) {
      setDisabled(true)
    } else {
      setDisabled(false)
    }
  }

  return (
    <>
      {/* Originally, I used the below, but that made signing up impossible :-( */}
      {/* {currentUser && <Redirect to={location.state.from} />} */}
      {currentUser && <Redirect to="/" />}
      <p>welcome to flashy, a flashcard app!</p>
      <h2>SIGN UP</h2>
      <form className="signup-form auth-form" onSubmit={(e) => {
        e.preventDefault();
        handleRegister(formData);
      }}>
        <input
          required
          type="text"
          className="signup-username signup-input"
          name="username"
          value={username}
          placeholder="username"
          onChange={handleChange}
          onKeyUp={handleKeyUp}
          autoComplete="off"
        />
        <input
          required
          type="email"
          className="signup-email signup-input"
          name="email"
          value={email}
          placeholder="email"
          onChange={handleChange}
          onKeyUp={handleKeyUp}
          autoComplete="off"
        />
        <input
          required
          name="password"
          value={password}
          type="password"
          className="signup-password signup-input"
          placeholder="password"
          onChange={handleChange}
          onKeyUp={handleKeyUp}
          autoComplete="off"
        />
        <p className="password-requirement">password must be at least 6 characters</p>
        <button className="signup-submit" disabled={disabled}>SIGN UP</button>
      </form>
      <p>Already a member?</p>
      <Link to="/sign-in" className="gray-link">SIGN IN</Link>
    </>
  );
}
