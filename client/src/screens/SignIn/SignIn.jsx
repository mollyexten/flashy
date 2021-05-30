import "./SignIn.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom"

export default function SignIn(props) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const {
    handleLogin,
    setAuthMessage,
    authMessage,
    setAuthAlert,
    authAlert
  } = props
  const { username, password } = formData;
  const [disabled, setDisabled] = useState(true)

  useEffect(() => {
    setAuthAlert(false)
    setAuthMessage("")
  }, [setAuthAlert, setAuthMessage])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleKeyUp = () => {
    let empty = false
    const keys = Object.keys(formData)
    keys.forEach((key) => {
      !formData[key] && (empty = true);
    })
    empty ? setDisabled(true) : setDisabled(false)
  }

  return (
    <>
      <p className="auth-welcome">welcome to flashy, a flashcard app!</p>
      <h2>Sign In</h2>
      <form
        className="signin-form auth-form"
        onSubmit={(e) => {
          e.preventDefault();
          handleLogin(formData)
      }}>
        <input
          required
          type="text"
          className="signin-username signin-input auth-input"
          name="username"
          value={username}
          placeholder="username"
          onChange={handleChange}
          onKeyUp={handleKeyUp}
          autoComplete="off"
        />
        <input
          required
          name="password"
          value={password}
          type="password"
          className="signin-password signin-input auth-input"
          placeholder="password"
          onChange={handleChange}
          onKeyUp={handleKeyUp}
          autoComplete="off"
        />
        {authAlert ? (
          <p className="signin-loading signin-invalid">
            {authMessage}
          </p>
        ): (
                      <p className="signin-loading">
            {authMessage}
          </p>
        )}
        <button
          type="submit"
          className="signin-submit"
          disabled={disabled}
        >
          sign in
        </button>
      </form>
      <p>Not a member?</p>
      <Link to="/sign-up" className="auth-switch">SIGN UP</Link>
    </>
  );
}
