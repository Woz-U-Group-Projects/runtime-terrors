import "./Register.css";
import React from "react";

export default function Login() {
    return (
    <div className="Register">
        <span className="regTitle">Registration</span>
        <form className="regForm">
            <label>Username</label>
            <input type="text" className="RegInput" placeholder="Username" />
            <label>Email</label>
            <input type="text" className="RegInput" placeholder="Email" />
            <label>Password</label>
            <input type="text" className="RegInput" placeholder="Password" />
            <button className="regBtn">Submit</button>
        </form>
        <div>or</div>
            <button className="regLoginBtn">Login</button>
    </div>
    )
}