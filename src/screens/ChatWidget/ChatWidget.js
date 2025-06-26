import React, { useState } from 'react';
import './ChatWidget.css';
import MessageIcon from '../../assets/messageIcon.png'; 

function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (message.trim()) {
      alert(`Message sent: ${message}`);
      setMessage('');
    }
  };

  return (
    <div className="chat-container">
      {/* Floating Button */}
      <div className="chat-toggle" onClick={() => setIsOpen(!isOpen)}>
        <img src={MessageIcon} alt="Chat Icon" className="chat-icon" />
        <p className="chat-label">Let's Chat!</p>
      </div>

      {/* Chat Box */}
      {isOpen && (
        <div className="chat-box">
          <textarea
            placeholder="Type your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button onClick={handleSend}>Send</button>
        </div>
      )}
    </div>
  );
}

export default ChatWidget;
