import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/chat');
  };

  return (
    <div className="Container">
      <div className="left-section">
        <h1 className="main-heading">TherapyAI</h1>
        <p className="sub-heading">Your very own AI Therapist!</p>
        <button className="cta-button" onClick={handleClick}>
          Get Started!
        </button>
        <p className="footer-text">© 2024 AI Therapist | Empowering Minds</p>
      </div>
    </div>
  );
}

export default Home;