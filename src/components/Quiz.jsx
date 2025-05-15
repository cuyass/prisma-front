import React, { useState } from "react";

const Quiz = ({ questions = [], onFinish }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);

  const handleAnswer = (isCorrect, index) => {
    if (isCorrect) setScore(score + 1);
    setSelectedAnswers([...selectedAnswers, index]);

    const next = currentQuestion + 1;
    if (next < questions.length) {
      setCurrentQuestion(next);
    } else {
      onFinish?.(score + (isCorrect ? 1 : 0));
    }
  };

  const q = questions[currentQuestion];

  return (
    <div className="mt-8 p-6 rounded-box bg-base-200">
      <h3 className="text-lg font-semibold mb-4">
        {q.question}
      </h3>
      <ul className="space-y-2">
        {q.answers.map((ans, i) => (
          <li key={i}>
            <button
              onClick={() => handleAnswer(ans.isCorrect, i)}
              className="btn btn-block btn-outline"
            >
              {ans.text}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Quiz;

