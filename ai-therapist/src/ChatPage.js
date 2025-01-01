import React, { useState } from "react";
import axios from "axios";
import "./ChatPage.css";

const ChatPage = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = async () => {
    if (input.trim()) {
      // Add user message to the chat
      setMessages([...messages, { sender: "user", text: input }]);
  
      try {
        const response = await axios.post("http://127.0.0.1:5000/api/chat", {
          message: input,
        });
        // Using this for testing purposes lol
        console.log("Backend response:", response.data); 
        setMessages((prevMessages) => [
          ...prevMessages,
          { sender: "bot", text: response.data.bot_message },
        ]);
      } catch (error) {
        // testing cuz the heck, I NEED TO KNOW THE ERROR
        console.error("Error sending message:", error); 
        setMessages((prevMessages) => [
          ...prevMessages,
          { sender: "bot", text: "Sorry, an error occurred." },
        ]);
      }
  
      setInput("");
    }
  };

  const handleInputChange = (e) => setInput(e.target.value);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <div>
      <header>
        <h1>Start your Chat!</h1>
      </header>
      <div className="chat-container">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message ${message.sender}`}
          >
            {message.text}
          </div>
        ))}
      </div>
      <div className="chat-input-container">
        <input
          className="chat-input"
          type="text"
          placeholder="Type your message here..."
          value={input}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
        <button className="send-button" onClick={handleSend}>
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatPage;
