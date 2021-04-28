import "./SignIn.css";
import { useState } from "react";

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
      <p>SIGN IN</p>
      <form className="signin-container" onSubmit={(e) => {
        e.preventDefault();
        handleLogin(formData);
      }}>
        <input
          required
          type="text"
          className="signin-username"
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
          className="signin-password"
          placeholder="password"
          onChange={handleChange}
        />
          <button type="submit" className="signin-submit">
          sign in
        </button>
        </form>
    </>
  );
}
