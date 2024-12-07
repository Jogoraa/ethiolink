import React, { useState } from "react";
import "../styles/Chat.css";

const ChatFooter = ({ sendMessage }) => {
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSend = () => {
    if (message.trim()) {
      sendMessage(message);
      setMessage("");
    }
  };

  return (
    <footer className="chat-footer">
      <input
        type="text"
        value={message}
        onChange={handleChange}
        className="chat-input"
        placeholder="Type a message..."
      />
      <button onClick={handleSend} className="send-btn">
        Send
      </button>
    </footer>
  );
};

export default ChatFooter;
