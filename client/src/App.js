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

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const handleVerify = async () => {
      const user = await verifyUser();
      user ? setCurrentUser(user) : setCurrentUser(null)
      // setCurrentUser(user);
    };
    handleVerify()
    console.log(`Current user is ${currentUser}`);
  }, []);

  const handleLogin = async (formData) => {
    const currentUser = await loginUser(formData);
    setCurrentUser(currentUser);
    history.push("/flashcards");
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
            path="/flashcards"
            component={Flashcard}
            currentUser={currentUser}
          />
          <Route
            path="/sign-up"
            render={() => <SignUp handleRegister={handleRegister} />}
          />
          <Route path="/sign-in">
            <SignIn setCurrentUser={setCurrentUser} handleLogin={handleLogin} />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
