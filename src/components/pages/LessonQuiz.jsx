import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Button from "../buttons/Button";
import Alert from "../Alert";
import { useNavigate } from "react-router";

const LessonQuiz = () => {
    
    const { id } = useParams();
  const [questions, setQuestions] = useState([]);
console.log(questions)
  useEffect(() => {
    axios.get(`http://localhost:8080/api/v1/questions/lesson/${id}`)
      .then(res => setQuestions(res.data));

  }, [id]);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Quiz!</h2>
      {questions.map((q, idx) => (
        <div key={q.id} className="mb-6">
          <div className="font-semibold">{idx + 1}. {q.text}</div>
          <div className="space-y-2 mt-2">
            {q.answers.map(ans => (
              <label key={ans.id} className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name={`q${q.id}`} className="radio radio-primary" />
                <span>{ans.text}</span>
              </label>
            ))}
          </div>
        </div>
      ))}
      {/* Aquí puedes poner un botón para enviar respuestas, etc */}
    </div>
  );
}
export default LessonQuiz;