import axios from "axios";
import { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../Context/Context";
import "./login.css";

export default function Login() {

    const userRef = useRef();
    const passwordRef = useRef();
    const { dispatch, isFetching } = useContext(Context);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      dispatch({ type: "LOGIN_START" });
      try {
        const res = await axios.post("/auth/login", {
          username: userRef.current.value,
          password: passwordRef.current.value,
        });
        dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      } catch (err) {
        dispatch({ type: "LOGIN_FAILURE" });
      }
    };

    return (
    <div className="login">
        <span className="loginTitle">Welcome back! Login to continue!</span>
        <form className="loginForm" onSubmit={handleSubmit}>
            <label>Username</label>
            <input 
            type="text"
            className="loginInput"
            placeholder="Username"
            ref={userRef} />

            <label>Password</label>
            <input type="password" 
            className="loginInput" 
            placeholder="Password"
            ref={passwordRef} />

            <button className="loginBtn" 
            type="submit" disabled={isFetching}
            >Login
            </button>
        </form>
            <button className="loginRegisterBtn">
            <Link className="link" 
            to="/register">Register</Link></button>
    </div>
    )
}