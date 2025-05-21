import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Check, X } from "lucide-react";
import Button from "../buttons/Button";


const LessonQuiz = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/v1/questions/lesson/${id}`)
      .then((res) => setQuestions(res.data));
  }, [id]);

  const handleSelectAnswer = (questionId, answerId) => {
    if (showResults) return;
    setSelectedAnswers((prev) => ({ ...prev, [questionId]: answerId }));
  };

  const handleSubmit = () => {
    setShowResults(true);
  };

  const handleReset = () => {
    setSelectedAnswers({});
    setShowResults(false);
  };

  const score = questions.reduce((acc, q) => {
    const selectedId = selectedAnswers[q.id];
    const correctAnswer = q.answers.find((a) => a.correct);
    return acc + (selectedId === correctAnswer?.id ? 1 : 0);
  }, 0);

  return (
    <div className="p-4">
        <div className="gap-4 py-5 w-30">
            <Button variant="info" onClick={() => navigate(`/learn/${id}`)}>
                ← Tornar
            </Button>
            </div>
      <h2 className="text-2xl font-bold mb-4">Quiz!</h2>
      {questions.length === 0 && (
        <div className="mt-4">
          Encara no hi ha preguntes disponibles, sashay away!
        </div>
      )}
      {questions.map((q, idx) => (
        <div key={q.id} className="mb-6">
          <div className="font-semibold">
            {idx + 1}. {q.text}
          </div>
          <div className="space-y-2 mt-2">
            {q.answers.map((ans) => {
              const isSelected = selectedAnswers[q.id] === ans.id;
              const isCorrect = ans.correct;
              const showCorrect = showResults && isCorrect;
              const showIncorrect = showResults && isSelected && !isCorrect;

              const labelClasses = [
                "flex items-center gap-2 cursor-pointer p-2 rounded",
                showCorrect ? "bg-[color:var(--color-success)] text-[color:var(--color-success-content)] border border-green-600" : "",
                showIncorrect ? "bg-color:var(--color-error)] text-[color:var(--color-error-content)] border border-red-600" : "",
                !showResults && isSelected ? "bg-blue-100" : "",
              ].join(" ");

              return (
                <label
                  key={ans.id}
                  className={labelClasses}
                  role="radio"
                  aria-checked={isSelected}
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      handleSelectAnswer(q.id, ans.id);
                    }
                  }}
                >
                  <input
                    type="radio"
                    name={`q${q.id}`}
                    checked={isSelected}
                    disabled={showResults}
                    onChange={() => handleSelectAnswer(q.id, ans.id)}
                    className="sr-only"
                  />
                  <span>{ans.text}</span>
                  {showCorrect && (
                    <Check
                      aria-label="Resposta correcta"
                      className="ml-auto text-green-700"
                      size={24}
                      strokeWidth={3}
                    />
                  )}
                  {showIncorrect && (
                    <X
                      aria-label="Resposta incorrecta"
                      className="ml-auto text-red-700"
    size={24}
    strokeWidth={3}
                    />
                  )}
                </label>
              );
            })}
          </div>
        </div>
      ))}
      <div className="mt-6 grid grid-cols-1 gap-4 w-40">
        {!showResults ? (
          <Button
          onClick={handleSubmit}
          disabled={Object.keys(selectedAnswers).length !== questions.length ||
            questions.length === 0}
          variant="primary"
        >
          Enviar respostes
        </Button>
      ) : (
        <Button onClick={handleReset} variant="accent">
          Reiniciar test
        </Button>
        )}
        <Button variant="info" onClick={() => navigate(`/learn/${id}`)}>
                    ← Tornar
                </Button>
      </div>
      {showResults && (
        <div className="mt-4 font-semibold text-lg">
          Has encertat {score} de {questions.length} preguntes.
        </div>
      )}
    </div>
  );
};

export default LessonQuiz;
