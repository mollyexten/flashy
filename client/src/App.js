import "./App.css";
import { useState, useEffect } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import {
  loginUser,
  registerUser,
  verifyUser,
  removeToken,
} from "./services/auth";
import SignUp from "./screens/SignUp/SignUp";
import SignIn from "./screens/SignIn/SignIn";
import Flashcard from "./containers/Flashcard/Flashcard";
import Layout from "./components/shared/Layout/Layout";

// DON'T FORGET TO ATTRIBUTE FLATICON ICONS!
// <div>Icons made by <a href="https://www.flaticon.com/authors/those-icons" title="Those Icons">Those Icons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const handleVerify = async () => {
      const user = await verifyUser();
      setCurrentUser(user);
    };
    handleVerify()
  }, []);

  const handleLogin = async (formData) => {
    const user = await loginUser(formData);
    setCurrentUser(user);
    history.push("/");
  };

  const handleRegister = async (formData) => {
    const currentUser = await registerUser(formData);
    setCurrentUser(currentUser);
    history.push("/flashcards");
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    removeToken();
    setCurrentUser(null);
    history.push("/sign-in")
  };

  return (
    <div className="App">
      <Layout
        currentUser={currentUser}
        handleLogout={handleLogout}
      >
        <Switch>
          <Route
            path="/sign-up"
            render={() => <SignUp handleRegister={handleRegister} />}
          />
          <Route path="/sign-in">
            <SignIn setCurrentUser={setCurrentUser} handleLogin={handleLogin} />
          </Route>
          <Route
            path="/"
            render={() => <Flashcard currentUser={currentUser} />}
          />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
