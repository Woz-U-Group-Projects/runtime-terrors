import "./Login.css";
import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context"

export default function Login() {
    const userRef = useRef();
    const passwordRef = useRef();
    const { user, dispatch, isFetching } = useContext(Context)

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({type:"LOGIN_START"})
        try{
            const res = axios.post("/auth/login", {
                username: userRef.current.value,
                password: passwordRef.current.value,

            })
            dispatch({type:"LOGIN_SUCCESS", payload: res.data})
        }catch(err){
            dispatch({ type: "LOGIN_FAILURE" })
        }
    };

    console.log(user)
    return (
    <div className="login">
        <span className="loginTitle">Welcome back! Login to continue!</span>
        <form className="loginForm" onSubmit={handleSubmit}>

            <label>Username</label>
            <input type="text"
            className="loginInput"
            placeholder="Username"
            ref={userRef} />

            <label>Password</label>
            <input type="text" 
            className="loginInput" 
            placeholder="Password"
            ref={passwordRef} />

            <button className="loginBtn" 
            type="submit">Login</button>

            <Link className="link" 
            to="/register">Register</Link>

        </form>
        <div>or</div>
            <button className="loginRegisterBtn">Register</button>
    </div>
    )
}