import { useState } from "react";

export default function RiskAssessments() {
  const questions = [
    {
      question: "Which of these is a common livestock disease?",
      options: ["Influenza", "Diabetes", "Asthma", "Fluoride Deficiency"],
      answer: "Influenza",
    },
    {
      question: "What is the best way to prevent disease on farms?",
      options: ["Regular handwashing", "Skipping meals", "Ignoring symptoms", "Overfeeding animals"],
      answer: "Regular handwashing",
    },
    {
      question: "Which practice improves farm hygiene?",
      options: ["Clean water supply", "Dirty pens", "No vaccinations", "Random feeding"],
      answer: "Clean water supply",
    },
  ];

  const [userAnswers, setUserAnswers] = useState({});
  const [score, setScore] = useState(null);

  const handleOptionChange = (qIndex, option) => {
    setUserAnswers({ ...userAnswers, [qIndex]: option });
  };

  const handleSubmit = () => {
    let newScore = 0;
    questions.forEach((q, i) => {
      if (userAnswers[i] === q.answer) newScore++;
    });
    setScore(newScore);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 text-green-700">📝 Risk Assessment Quiz</h2>
      
      <div className="space-y-6">
        {questions.map((q, i) => (
          <div key={i} className="bg-white p-4 rounded-xl shadow">
            <p className="font-semibold mb-2">
              Q{i + 1}. {q.question}
            </p>
            <div className="space-y-2">
              {q.options.map((opt, j) => (
                <label key={j} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name={`q${i}`}
                    value={opt}
                    checked={userAnswers[i] === opt}
                    onChange={() => handleOptionChange(i, opt)}
                    className="accent-green-600"
                  />
                  {opt}
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>

      <button
        className="mt-6 bg-green-700 text-white px-6 py-2 rounded hover:bg-green-800 transition"
        onClick={handleSubmit}
      >
        Submit
      </button>

      {score !== null && (
        <div className="mt-6 p-4 bg-green-100 rounded-lg shadow">
          <p className="font-bold text-green-700">
            ✅ You scored {score}/{questions.length}
          </p>
          <p className="text-sm text-gray-600">
            {score === questions.length
              ? "Excellent! You got all correct."
              : "Review the incorrect answers and try again."}
          </p>
        </div>
      )}
    </div>
  );
}
