import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Chat from "./components/Chat";
import ChatHeader from "./components/ChatHeader";
import ChatFooter from "./components/ChatFooter";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import AuthLayout from "./layouts/AuthLayout"; // AuthLayout component for login/signup

import './styles/App.css';  // Global styles
import './styles/auth.css'; // Auth-specific styles
import './styles/Chat.css'; // Chat page styles

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/" element={<Signup />} />
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
        </Route>
        <Route path="chat" element={<Chat />} />

      
      </Routes>
    </Router>
  );
};

export default App;
