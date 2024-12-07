import React, { useState, useEffect } from 'react';
import { db } from '../firebase'; // Firebase setup
import { collection, query, orderBy, onSnapshot, addDoc, serverTimestamp } from 'firebase/firestore';
import '../styles/Chat.css'; // Add your chat-specific styles

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  // Fetch messages from Firestore in real-time
  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("timestamp"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const messagesData = [];
      querySnapshot.forEach((doc) => {
        messagesData.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messagesData);
    });

    return () => unsubscribe(); // Clean up the listener on component unmount
  }, []);

  // Handle sending a new message
  const handleSendMessage = async () => {
    if (newMessage.trim()) {
      await addDoc(collection(db, "messages"), {
        text: newMessage,
        timestamp: serverTimestamp(),
        user: "User", // You can replace this with dynamic user data
      });
      setNewMessage('');
    }
  };

  return (
    <div className="chat-container">
      <div className="messages-container">
        {messages.map((message) => (
          <div key={message.id} className="message">
            <p>{message.user}: {message.text}</p>
          </div>
        ))}
      </div>

      <div className="chat-footer">
        <input
          type="text"
          className="chat-input"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type a message"
        />
        <button className="send-btn" onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chat;
