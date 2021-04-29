import "./SignIn.css";
import { useState } from "react";
import { Link } from "react-router-dom"

export default function SignIn({handleLogin}) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const { username, password } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <>
      <p>welcome to flashy, a flashcard app!</p>
      <h2>SIGN IN</h2>
      <form className="signin-form auth-form" onSubmit={(e) => {
        e.preventDefault();
        handleLogin(formData);
      }}>
        <input
          required
          type="text"
          className="signin-username signin-input"
          name="username"
          value={username}
          placeholder="username"
          onChange={handleChange}
        />
        <input
          required
          name="password"
          value={password}
          type="password"
          className="signin-password signin-input"
          placeholder="password"
          onChange={handleChange}
        />
          <button type="submit" className="signin-submit">
          sign in
        </button>
      </form>
      <p>Not a member?</p>
      <Link to="/sign-up" className="bottom-link">SIGN UP</Link>
    </>
  );
}
