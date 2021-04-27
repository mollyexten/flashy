import "./SignUp.css";
import Layout from "../../components/shared/Layout/Layout";
import { useState } from "react";
// import { signUp, signIn } from "../../services/users";
// import { useHistory } from "react-router-dom";

export default function SignUp(props) {
  // const history = useHistory()
  const { user } = props

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    passwordConfirmation: "",
    isError: false,
    errorMsg: "",
  });

  const handleChange = (event) =>
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });

  // const onSignUp = (event) => {
  //   event.preventDefault();
  //   const { setUser } = props
  // signUp(form)
  // .then(() => signIn(form))
  // .then((user) => setUser(user))
  // .then(() => history.push("/"))
  // .catch((error) => {
  //   console.error(error);
  //   setForm({
  //     email: "",
  //     password: "",
  //     passwordConfirmation: "",
  //     isError: true,
  //     errorMsg: "Sign Up Details Invalid",
  //   });
  // });
  // }

  // const renderError = () => {
  //   const toggleForm = form.isError ? "danger" : "";
  //   if (form.isError) {
  //     return (
  //       <button type="submit" className={toggleForm}>
  //         {form.errorMsg}
  //       </button>
  //     );
  //   } else {
  //     return (
  //       <button type="submit" className="signup-submit">
  //         sign up
  //       </button>
  //     );
  //   }
  // };

  const { email, username, password, passwordConfirmation } = form;
  return (
    <Layout user={user}>
      <p>SIGN UP</p>
      <div className="signup-form">
        <h3 className="signup-header">sign up</h3>
        <form className="signup-form" /*onSubmit={onSignUp}*/>
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
          <input
            required
            name="passwordConfirmation"
            className="signup-password-confirmation"
            value={passwordConfirmation}
            type="password"
            placeholder="confirm password"
            onChange={handleChange}
          />
          {/* {renderError()} */}
        </form>
      </div>
    </Layout>
  );
}
