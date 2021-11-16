import './App.css';
import TopBar from "./Components/TopBar/topbar"
import Home from "./Pages/home/home"
import Single from "./Pages/Single/single"
import Write from "./Pages/Write/write"
import Task from "./Pages/Profile/profile"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Login from "./Pages/Login/login"
import Register from "./Pages/Register/register"
import {useContext} from "react";
import { Context } from "./Context/Context";

function App() {
  const { user } = useContext(Context);
  return (
<div className="App">
    <Router>
    <TopBar />
    <Routes>
      <Route exact path="/profile" element={<Task />} />
      <Route exact path="/posts" element={<Home />} />
      <Route exact path="/write" element={<Write />} />
      <Route exact path="/post/:postId" element={<Single />} />
      <Route exact path="/register" element={<Register />} />
      <Route exact path="/login" element={<Login />} />
    </Routes>
    </Router>
    </div>
  );
}

export default App;

