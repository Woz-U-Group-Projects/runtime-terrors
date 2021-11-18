import './App.css';
import TopBar from "./Components/TopBar/topbar"
import Home from "./Pages/home/home"
import Single from "./Pages/Single/single"
import Write from "./Pages/Write/write"
import Task from "./Pages/Profile/profile"
import {BrowserRouter as Router, Route, Routes, Switch} from "react-router-dom"
import Login from "./Pages/Login/login"
import Register from "./Pages/Register/register"
import {useContext} from "react";
import { Context } from "./Context/Context";

function App() {
  const { user } = useContext(Context);
  return (
    <Router>
      <TopBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/register">{user ? <Home /> : <Register />}</Route>
        <Route path="/login">{user ? <Home /> : <Login />}</Route>
        <Route path="/write">{user ? <Write /> : <Register />}</Route>
        <Route path="/profile">{user ? <Task /> : <Register />}</Route>
        <Route path="/post/:postId"> <Single />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
