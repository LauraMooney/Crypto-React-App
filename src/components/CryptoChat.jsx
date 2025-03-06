/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import '../App.css';

const CryptoChat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  // Simulate AI response
  const handleSendMessage = () => {
    if (input.trim() === '') return; // Don't send empty messages

    // Add user message
    setMessages((prevMessages) => [
      ...prevMessages,
      { sender: 'user', text: input },
    ]);

    // Simulate AI response
    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: 'ai', text: 'AI: Here’s some crypto advice!' },
      ]);
    }, 1000); // AI response delay (simulating network delay)

    setInput(''); // Clear input field after sending message
  };

  return (
    <div className="crypto-chat-container">
      <div className="messages-container">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message ${message.sender === 'user' ? 'user-message' : 'ai-message'}`}
          >
            {message.text}
          </div>
        ))}
      </div>

      <div className="input-container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message"
          className="message-input"
        />
        <button onClick={handleSendMessage} className="send-button">
          Send
        </button>
      </div>
    </div>
  );
};

export default CryptoChat;
