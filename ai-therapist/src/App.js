import React from 'react';
import './index.css';
import ChatPage from './ChatPage';

function App() {
  return (
    <div className="Container">
      <div className="left-section">
        <h1 className="main-heading">TherapyAI</h1>
        <p className="sub-heading">Your very own AI Therapist!</p>
        
        <p className="footer-text">© 2024 AI Therapist | Empowering Minds</p>
      </div>
      <div className="right-section">
        <ChatPage />
      </div>
    </div>
  );
}

export default App;
