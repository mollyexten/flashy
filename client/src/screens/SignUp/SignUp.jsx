import "./SignUp.css";
import { useState } from "react";
import { Link } from "react-router-dom"

export default function SignUp(props) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const { username, email, password } = formData
  const { handleRegister } = props

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  return (
    <>
      <p>welcome to flashy, a flashcard app!</p>
      <h2>SIGN UP</h2>
      <form className="signup-form auth-form" onSubmit={(e) => {
        e.preventDefault();
        handleRegister(formData);
      }}>
        <input
          required
          type="text"
          className="signup-username"
          name="username"
          value={username}
          placeholder="username"
          onChange={handleChange}
        />
        <input
          required
          type="email"
          className="signup-email"
          name="email"
          value={email}
          placeholder="email"
          onChange={handleChange}
        />
        <input
          required
          name="password"
          value={password}
          type="password"
          className="signup-password"
          placeholder="password"
          onChange={handleChange}
        />
        <button className="signup-submit">SIGN UP</button>
      </form>
      <p>Already a member?</p>
      <Link to="/sign-in">SIGN IN</Link>
    </>
  );
}
