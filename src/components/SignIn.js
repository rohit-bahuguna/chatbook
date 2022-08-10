import React, { useState } from "react";
import "../css/signin.css";
import { useNavigate } from "react-router-dom";
import { Alert } from "react-bootstrap";
import "firebase/app";
import { useUserAuth } from "../context/UserAuthContext";
import Header from "./Header";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const { signUp , googleSignIn} = useUserAuth();
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      navigate("/login");
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
        <div className="signup">
          
          <form>
            <label htmlFor="chk" aria-hidden="true">
              Sign up
            </label>
            {error && <Alert variant="danger" >{error}</Alert>}
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
            <button onClick={handleSubmit}>Sign up</button>
          </form>
          <div className="social">
            <button className="go" onClick={handleGoogleSignIn}>Google</button>
            <button className="fb">Facebook</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
