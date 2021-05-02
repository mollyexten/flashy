import "./App.css";
import { useState, useEffect } from "react";
import { Route, Switch, useHistory, Redirect, useLocation } from "react-router-dom";
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
  const location = useLocation();

// Auth api calls are called here (verify, login, register, and signout)

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
    history.push("/");
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
          {/* Two different methods of using route shown below for future reference */}
          <Route
            path="/sign-up"
            render={() => <SignUp
              handleRegister={handleRegister}
              currentUser={currentUser}
            />}
          />
          <Route path="/sign-in">
            <SignIn setCurrentUser={setCurrentUser} handleLogin={handleLogin} />
          </Route>
          {!currentUser && <Redirect to={{pathname: "/sign-up", state: {from: location}}} />}
          
          {/* Flashcard decks and entries will be stored within the Flashcard container component */}
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
