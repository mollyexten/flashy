import './App.css';
import { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Decks from "./screens/Decks/Decks"
import SignUp from "./screens/SignUp/SignUp"
import SignIn from "./screens/SignIn/SignIn"
import SignOut from "./screens/SignOut/SignOut"

function App() {
  const [user, setUser] = useState(null)

  // useEffect to fetch user here
  // userEffect(() => {
  //   const fetchUser = async () => {
  //     const user = await verifyUser()
  //     user ? setUser(user) : setUser(null)
  //   }
  //   fetchUser()
  // }, [])

  // clearUser here
  // const clearUser = () => {
  //   localStorage.removeItem('token')
  //   setUser(null)
  // }

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Decks />
        </Route>
        <Route path="/sign-up">
          <SignUp />
        </Route>
        <Route path="/sign-in">
          <SignIn />
        </Route>
        <Route path="/sign-out">
          <SignOut />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
