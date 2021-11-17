
import { useContext } from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Context } from "../../Context/Context";
import "./topbar.css";
import { Dropdown}  from 'react-bootstrap';

export default function TopBar() {
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/"

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/profile">
              ABOUT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          <Dropdown className="dropdownInfo">
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    CATEGORIES
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Comedy</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Nature</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Psychology</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Art</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Politics</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Music</Dropdown.Item>
    <Dropdown.Item href="#/action-3">DIY</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
          <li className="topListItem" onClick={handleLogout}>
            {user && "LOGOUT"}
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link to="/settings">
            <img className="topImg" src={PF+user.profilePic} alt="" />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}