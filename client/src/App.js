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
  const [authMessage, setAuthMessage] = useState("Password must be at least 6 characters")
  const [authAlert, setAuthAlert] = useState(false)
  const history = useHistory();

// Auth api calls are called here (verify, login, register, and signout)

  useEffect(() => {
    const handleVerify = async () => {
      const user = await verifyUser();
      setCurrentUser(user);
    };
    handleVerify()
  }, []);

  const handleLogin = async (formData) => {
    setAuthMessage("Loading...")
    await loginUser(formData)
      .then(user => { setCurrentUser(user) })
      .then(() => history.push("/"))
      .catch(error => {
        console.error(error)
        setAuthAlert(true)
        setAuthMessage("Invalid credentials")
      })
  };

  const handleRegister = async (formData) => {
    if (formData.password !== formData.confirmation) {
      setAuthAlert(true)
      setAuthMessage("Passwords do not match!")
    } else if ((formData.password).length < 6) {
      setAuthAlert(true)
      setAuthMessage("Make a longer password!")
    } else {
      setAuthAlert(false)
      setAuthMessage("Loading...")
      const { username, email, password } = formData
      const credentials = {
        username,
        email,
        password
      }
      const currentUser = await registerUser(credentials);     
      setCurrentUser(currentUser);
      setAuthMessage("Password must be at least 6 characters")
      history.push("/");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    removeToken();
    setCurrentUser(null);
    history.push("/")
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
              setAuthMessage={setAuthMessage}
              authMessage={authMessage}
              setAuthAlert={setAuthAlert}
              authAlert={authAlert}
            />}
          />
          <Route path="/sign-in">
            <SignIn
              setCurrentUser={setCurrentUser}
              handleLogin={handleLogin}
              setAuthMessage={setAuthMessage}
              authMessage={authMessage}
              setAuthAlert={setAuthAlert}
              authAlert={authAlert}
            />
          </Route>
          <Route
            path="/"
            render={() => <Flashcard
              currentUser={currentUser}
            />}
          />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
