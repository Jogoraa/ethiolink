import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Chat from "./components/Chat";
import ChatHeader from "./components/ChatHeader";
import ChatFooter from "./components/ChatFooter";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/chat" element={
          <>
            <ChatHeader />
            <Chat />
            <ChatFooter />
          </>
        } />
        <Route path="/" element={<h1>Welcome to Ethiolink</h1>} />
      </Routes>
    </Router>
  );
};

export default App;
