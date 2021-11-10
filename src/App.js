import './App.css';
import TopBar from "./Components/TopBar/topbar"
import Home from "./Pages/home/home"
import Single from "./Pages/Single/single"
import Write from "./Pages/Write/write"
import Settings from "./Pages/Settings/settings"
import {BrowserRouter as Router, Route, Link, Routes} from "react-router-dom"
import ReactDOM from 'react-dom';

function App() {
  const user = false;
  return (
<div className="App">
    <Router>
    <TopBar />
    <Routes>
      <Route exact path="/profile" element={<Settings />} />
      <Route exact path="/" element={<Home />} />
      <Route exact path="/write" element={<Write />} />
      <Route exact path="/post/:postId" element={<Single />} />
    </Routes>
    </Router>
    </div>
  );
}

export default App;
