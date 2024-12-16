import React from "react";
import { useNavigate } from "react-router-dom";  // Import useNavigate from react-router-dom
import './Home.css';  // Ensure correct path

function Home() {
  const navigate = useNavigate();  // Create the navigate function

  const handleClick = () => {
    navigate("/signup");  // Redirect to the signup page
  };

  return (
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-title">Welcome to the Quiz App!</h1>
        <p className="home-description">
          Test your knowledge with a variety of quizzes. Sign up, log in, and get started today!
        </p>
        <button className="home-button" onClick={handleClick}>Get Started</button>
      </div>
    </div>
  );
}

export default Home;
