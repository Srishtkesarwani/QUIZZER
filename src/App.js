import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";  // Updated import
import Signup from "./components/Signup1";
import Login from "./components/Login";
import CreateQuiz from "./components/CreateQuiz";
import Leaderboard from "./components/Leaderboard";
import Quiz from "./components/Quiz";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />  {/* This will match the root path */}
          <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/create-quiz" element={<CreateQuiz />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/quiz/:quizId" element={<Quiz />} />
        </Routes>
      </div>
    </Router>
  );
}



export default App;
