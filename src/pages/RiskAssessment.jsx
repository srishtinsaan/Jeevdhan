import React from 'react'

function RiskAssessment() {
  return (
    <div>
      
    </div>
  )
}

export default RiskAssessment

function AssessmentView() {
    const [farmName, setFarmName] = useState("");
    const [answers, setAnswers] = useState({});
    const [result, setResult] = useState(null);

    useEffect(() => {
      setResult(null);
    }, []);

    const handleAnswer = (qid, val) => {
      setAnswers((s) => ({ ...s, [qid]: val }));
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      const score = computeScore(answers);
      const level = scoreToLevel(score);
      const recs = recommendationsForLevel(level);
      const assessment = {
        id: Date.now(),
        farmName: farmName || "My Farm",
        answers,
        score,
        level,
        recs,
        createdAt: Date.now(),
      };
      pushAssessment(assessment);
      setResult(assessment);
      setSelectedAssessment(assessment);
    };

    return (
      <div className="max-w-3xl mx-auto p-6">
        <h2 className="text-2xl font-semibold mb-4">Quick Risk Assessment</h2>
        <p className="text-sm text-gray-300 mb-4">A short set of questions to gauge farm-level biosecurity risk.</p>

        <form onSubmit={handleSubmit} className="bg-white/5 p-4 rounded-lg space-y-4">
          <div>
            <label className="block text-sm mb-1">Farm name (optional)</label>
            <input value={farmName} onChange={(e)=>setFarmName(e.target.value)} className="w-full p-2 rounded bg-black/30" placeholder="e.g., Singh Poultry Farm"/>
          </div>

          {assessmentQuestions.map((q) => (
            <div key={q.id} className="p-3 bg-black/20 rounded">
              <div className="font-medium mb-2">{q.q}</div>
              <div className="flex gap-2">
                {Object.keys(q.weights).map((opt) => (
                  <label key={opt} className={`px-3 py-1 rounded cursor-pointer ${answers[q.id] === opt ? "bg-red-600" : "bg-white/5"}`}>
                    <input
                      type="radio"
                      name={q.id}
                      value={opt}
                      checked={answers[q.id] === opt}
                      onChange={()=>handleAnswer(q.id, opt)}
                      className="hidden"
                    />
                    {opt}
                  </label>
                ))}
              </div>
            </div>
          ))}

          <div className="flex gap-3 justify-end">
            <button type="submit" className="px-4 py-2 bg-red-600 rounded">Compute</button>
          </div>
        </form>

        {result && <AssessmentResultCard result={result} />}
        <RecentAssessments list={store.assessments} onSelect={(a)=>{ setSelectedAssessment(a); setView("dashboard"); }} />
      </div>
    );
  }

  function AssessmentResultCard({ result }) {
    return (
      <div className="mt-6 bg-white/6 p-4 rounded-lg">
        <h3 className="text-lg font-semibold">Result — {result.farmName}</h3>
        <p className="mt-2">Score: <strong>{result.score}</strong> — Level: <strong>{result.level}</strong></p>
        <div className="mt-3">
          <div className="font-medium">Recommendations</div>
          <ul className="list-disc ml-5 mt-2">
            {result.recs.map((r, i) => <li key={i} className="text-sm text-gray-200">{r}</li>)}
          </ul>
        </div>
      </div>
    );
  }

  function RecentAssessments({ list = [], onSelect }) {
    if (!list || list.length === 0) return null;
    return (
      <div className="mt-8">
        <h4 className="font-semibold mb-2">Recent Assessments</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {list.slice(0,6).map(a => (
            <div onClick={()=>onSelect?.(a)} key={a.id} className="p-3 bg-white/5 rounded cursor-pointer hover:bg-white/8">
              <div className="flex justify-between"><div className="font-medium">{a.farmName}</div><div className="text-sm text-gray-300">{new Date(a.createdAt).toLocaleString()}</div></div>
              <div className="text-sm mt-2">Level: <strong>{a.level}</strong> • Score: {a.score}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }
