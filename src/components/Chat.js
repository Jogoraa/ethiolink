import React, { useState } from "react";
import ChatFooter from "./ChatFooter";
import ChatHeader from "./ChatHeader";
import "../styles/Chat.css";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSend = () => {
    if (message.trim()) {
      setMessages([...messages, { text: message, id: Date.now() }]);
      setMessage("");
    }
  };

  return (
    <div className="chat-container">
      <ChatHeader />
      <div className="messages-container">
        {messages.map((msg) => (
          <div key={msg.id} className="message">
            <span className="message-text">{msg.text}</span>
          </div>
        ))}
      </div>
      <ChatFooter message={message} handleChange={handleChange} handleSend={handleSend} />
    </div>
  );
};

export default Chat;
