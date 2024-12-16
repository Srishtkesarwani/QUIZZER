import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Updated import

const CreateQuiz = () => {
  const [title, setTitle] = useState("");
  const [questions, setQuestions] = useState([{ question: "", options: [], correctAnswer: "" }]);
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  const handleQuestionChange = (index, event) => {
    const newQuestions = [...questions];
    newQuestions[index][event.target.name] = event.target.value;
    setQuestions(newQuestions);
  };

  const handleAddQuestion = () => {
    setQuestions([...questions, { question: "", options: [], correctAnswer: "" }]);
  };

  const handleSubmitQuiz = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      await axios.post(
        "http://localhost:5000/api/create-quiz",
        { title, questions },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      navigate("/leaderboard"); // Use navigate to go to the leaderboard page
    } catch (error) {
      alert("Error creating quiz");
    }
  };

  return (
    <div>
      <h2>Create Quiz</h2>
      <form onSubmit={handleSubmitQuiz}>
        <div>
          <label>Quiz Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        {questions.map((q, index) => (
          <div key={index}>
            <h3>Question {index + 1}</h3>
            <div>
              <label>Question</label>
              <input
                type="text"
                name="question"
                value={q.question}
                onChange={(e) => handleQuestionChange(index, e)}
                required
              />
            </div>
            <div>
              <label>Correct Answer</label>
              <input
                type="text"
                name="correctAnswer"
                value={q.correctAnswer}
                onChange={(e) => handleQuestionChange(index, e)}
                required
              />
            </div>
            {/* Add fields for options if needed */}
          </div>
        ))}

        <button type="button" onClick={handleAddQuestion}>Add Question</button>
        <button type="submit">Submit Quiz</button>
      </form>
    </div>
  );
};

export default CreateQuiz;
