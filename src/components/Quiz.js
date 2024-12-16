import React, { useState, useEffect } from "react";
import axios from "axios";

const Quiz = ({ match }) => {
  const [quiz, setQuiz] = useState(null);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        const { data } = await axios.get(`http://localhost:5000/api/quiz/${match.params.quizId}`);
        setQuiz(data);
      } catch (error) {
        alert("Error fetching quiz");
      }
    };

    fetchQuiz();
  }, [match.params.quizId]);

  const handleAnswerChange = (index, answer) => {
    const newAnswers = [...answers];
    newAnswers[index] = answer;
    setAnswers(newAnswers);
  };

  const submitQuiz = async () => {
    try {
      const token = localStorage.getItem("token");
      await axios.post(
        `http://localhost:5000/api/quiz/${match.params.quizId}/submit`,
        { answers },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert("Quiz submitted successfully!");
    } catch (error) {
      alert("Error submitting quiz");
    }
  };

  return (
    <div>
      <h2>{quiz?.title}</h2>
      {quiz?.questions.map((q, index) => (
        <div key={index}>
          <h3>{q.question}</h3>
          {q.options.map((option, idx) => (
            <label key={idx}>
              <input
                type="radio"
                value={option}
                checked={answers[index] === option}
                onChange={() => handleAnswerChange(index, option)}
              />
              {option}
            </label>
          ))}
        </div>
      ))}
      <button onClick={submitQuiz}>Submit Quiz</button>
    </div>
  );
};

export default Quiz;
