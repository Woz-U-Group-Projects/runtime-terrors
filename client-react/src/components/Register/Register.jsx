import "./Register.css";
import React, { useState } from "react";
import axios from 'axios';

export default function Register() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(false);
        try{
        
        const res = await axios.post("/auth/register", {
            username,
            email,
            password,
        });
        res.data && window.location.replace("/login")
    }catch(err) {
        setError(true);
    }
    
    };

    return (
    <div className="Register">
        <span className="regTitle">Registration</span>
        <form className="regForm" onSubmit={handleSubmit}>

            <label>Username</label>
            <input type="text" 
            className="RegInput" 
            placeholder="Username"
            onChange={e=>setUsername(e.target.value)} />

            <label>Email</label>
            <input type="text"
             className="RegInput" 
             placeholder="Email"
             onChange={e=>setEmail(e.target.value)} />

            <label>Password</label>
            <input type="password" 
            className="RegInput" 
            placeholder="Password"
            onChange={e=>setPassword(e.target.value)} />

            <button className="regBtn" type="submit">Submit</button>

        </form>
        <div>or</div>
            <button className="regLoginBtn">Login</button>
            {error && <span style={{color: "red"}}>Username/Email already in use</span>}
    </div>
    )
}