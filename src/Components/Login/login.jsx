import "./login.css";
import React from "react";

export default function Login() {
    return (
    <div className="login">
        <span className="loginTitle">Welcome back! Login to continue!</span>
        <form className="loginForm">
            <label>Email</label>
            <input type="text" className="loginInput" placeholder="Email" />
            <label>Password</label>
            <input type="text" className="loginInput" placeholder="Password" />
            <button className="loginBtn">Login</button>
        </form>
        <div>or</div>
            <button className="loginRegisterBtn">Register</button>
    </div>
    )
}