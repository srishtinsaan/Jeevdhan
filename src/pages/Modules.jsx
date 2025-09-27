import { BookOpen, CheckCircle, Clock } from "lucide-react";

export default function Modules() {
  const modules = [
    { 
      title: "Biosecurity Basics", 
      desc: "Introduction to livestock farm safety.", 
      progress: 100, 
      status: "completed" 
    },
    { 
      title: "Disease Prevention", 
      desc: "Learn about common farm diseases and how to prevent them.", 
      progress: 60, 
      status: "in-progress" 
    },
    { 
      title: "Hygiene Practices", 
      desc: "Daily hygiene routines to keep animals safe.", 
      progress: 0, 
      status: "not-started" 
    },
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 text-green-700">📘 Training Modules</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {modules.map((m, i) => (
          <div 
            key={i} 
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
          >
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-lg flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-green-600" /> {m.title}
              </h3>
              {m.status === "completed" && (
                <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full flex items-center gap-1">
                  <CheckCircle className="w-4 h-4" /> Completed
                </span>
              )}
              {m.status === "in-progress" && (
                <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full flex items-center gap-1">
                  <Clock className="w-4 h-4" /> In Progress
                </span>
              )}
              {m.status === "not-started" && (
                <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                  Not Started
                </span>
              )}
            </div>

            <p className="text-sm text-gray-600 mt-2">{m.desc}</p>

            {/* Progress bar */}
            <div className="w-full bg-gray-200 h-2 rounded-full mt-3">
              <div 
                className={`h-2 rounded-full ${m.progress === 100 ? "bg-green-600" : "bg-yellow-500"}`} 
                style={{ width: `${m.progress}%` }}
              ></div>
            </div>

            {/* Action buttons */}
            <button 
              className={`mt-4 px-4 py-2 rounded text-white w-full ${
                m.status === "completed" ? "bg-gray-400 cursor-not-allowed" : "bg-green-600 hover:bg-green-700"
              }`}
              disabled={m.status === "completed"}
            >
              {m.status === "completed" ? "Completed" : "Start Module"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
