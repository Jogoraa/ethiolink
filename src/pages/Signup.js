import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom"; // Use useNavigate for navigation
import "../styles/auth.css";
import { Link } from 'react-router-dom';

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Use useNavigate hook

  const handleSignup = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate("/login"); // Use navigate instead of history.push
      })
      .catch((err) => setError(err.message));
  };

  return (
    <div className="auth-form">
      <h2>Sign Up for Ethiolink</h2>
      <form>
        {/* Your Signup Form here */}
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Sign Up</button>
      </form>

      <div className="switch-link">
        <p>Already have an account? <Link to="/login">Login here</Link></p>
      </div>
    </div>
  );
};

export default Signup;