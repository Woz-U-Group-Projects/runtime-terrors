import './App.css';
import TopBar from "./Components/TopBar/topbar"
import Home from "./Pages/home/home"
import Single from "./Pages/Single/single"
import Write from "./Pages/Write/write"
import Task from "./Pages/Profile/profile"
import Settings from "./Pages/Settings/settings"
import {BrowserRouter as Router, Route, Link, Routes} from "react-router-dom"
import Login from "./Components/Login/login"
import Register from "./Components/Register/register"

function App() {
  const user = false;
  return (
<div className="App">
    <Router>
    <TopBar />
    <Routes>
      <Route exact path="/profile" element={<Task/>} />
      <Route exact path="/posts" element={<Home />} />
      <Route exact path="/write" element={<Write />} />
      <Route exact path="/post/:postId" element={<Single />} />
      <Route exact path="/register" element={<Register />} />
      <Route exact path="login" element={<Login />} />
    </Routes>
    </Router>
    </div>
  );
}

export default App;
