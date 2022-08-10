import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {  Alert } from "react-bootstrap";
import { useUserAuth } from "../context/UserAuthContext";
import "../css/login.css";
import Header from "./Header";

const LogIn = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn, googleSignIn } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/home");
    } catch (error) {
      console.log(error.message);
    }
  };
    return (
        <>
        <Header/>
        <div className="main">
        <div className="login">
          <form>
            <label htmlFor="chk" aria-hidden="true">
              Login
            </label>
            {error && <Alert variant="danger">{error}</Alert>}
            <input
              type="email"
              name="email"
              placeholder="Email"
              required=""
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <input
              type="password"
              name="pswd"
              placeholder="Password"
              required=""
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            <button onClick={handleSubmit}>Login</button>
          </form>
          <div className="social">
            <button className="go"  onClick={handleGoogleSignIn} >Google</button>
            <button className="fb">Facebook</button>
          </div>
        </div>
        </div>
        </>
    )
}

export default LogIn;