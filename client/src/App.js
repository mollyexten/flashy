import './App.css';
import { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import SignUp from "./screens/SignUp/SignUp"
import SignIn from "./screens/SignIn/SignIn"
import SignOut from "./screens/SignOut/SignOut"
import Flashcard from "./containers/Flashcard/Flashcard"

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
        <Route path="/flashcards" component={Flashcard} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/sign-in" component={SignIn} />
        <Route path="/sign-out" component={SignOut} />
      </Switch>
    </div>
  );
}

export default App;
