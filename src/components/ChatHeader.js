import React from "react";
import Chat from "../styles/Chat.css";

const ChatHeader = () => {
  return (
    <header className="chat-header">
      <div className="chat-header-content">
        <h1 className="chat-title">Ethiolink</h1>
        <div className="chat-status">
          <span className="status-indicator online"></span>
          <span className="status-text">Online</span>
        </div>
      </div>
    </header>
  );
};

export default ChatHeader;
