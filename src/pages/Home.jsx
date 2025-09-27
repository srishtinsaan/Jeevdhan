import { useState } from "react";

function Home({ user }) {
  const [alerts] = useState(3);
  const [modules] = useState(2);
  const [score] = useState(75);

  return (
    <div className="p-6 space-y-6">
      {/* Welcome Section */}
      <h1 className="text-3xl font-bold mb-2">
        Welcome back, {user?.name || "Farmer"} 👋
      </h1>
      <p className="text-gray-600">
        Here’s your farm’s biosecurity overview and latest updates.
      </p>

      {/* Stats Cards */}
      <div className="grid grid-cols-3 gap-6 mt-6">
        <div className="bg-red-100 p-6 rounded-xl shadow hover:scale-105 transition">
          <h3 className="text-xl font-semibold">Active Alerts</h3>
          <p className="text-3xl font-bold mt-2">{alerts}</p>
          <p className="text-sm text-gray-600 mt-1">Needs immediate attention</p>
        </div>

        <div className="bg-blue-100 p-6 rounded-xl shadow hover:scale-105 transition">
          <h3 className="text-xl font-semibold">Modules Completed</h3>
          <p className="text-3xl font-bold mt-2">{modules}</p>
          <p className="text-sm text-gray-600 mt-1">Keep learning for better safety</p>
        </div>

        <div className="bg-green-100 p-6 rounded-xl shadow hover:scale-105 transition">
          <h3 className="text-xl font-semibold">Assessment Score</h3>
          <p className="text-3xl font-bold mt-2">{score}%</p>
          <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
            <div
              className="bg-green-600 h-2.5 rounded-full"
              style={{ width: `${score}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Alerts Preview */}
      <div className="bg-white p-6 rounded-xl shadow mt-6">
        <h2 className="text-xl font-bold mb-4">Recent Alerts 🚨</h2>
        <ul className="space-y-3">
          <li className="bg-red-50 p-3 rounded-lg">
            Avian Influenza detected in your region – 24 Sep 2025
          </li>
          <li className="bg-yellow-50 p-3 rounded-lg">
            Pig farm vaccination due next week – 20 Sep 2025
          </li>
        </ul>
        <button className="mt-4 bg-green-700 text-white px-4 py-2 rounded">
          View All Alerts
        </button>
      </div>

      {/* Training Progress */}
      <div className="bg-white p-6 rounded-xl shadow mt-6">
        <h2 className="text-xl font-bold mb-4">Training Progress 📚</h2>
        <div className="space-y-4">
          <div>
            <p className="font-medium">Biosecurity Basics</p>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-green-600 h-2.5 rounded-full" style={{ width: "80%" }}></div>
            </div>
          </div>
          <div>
            <p className="font-medium">Disease Prevention</p>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "40%" }}></div>
            </div>
          </div>
          <div>
            <p className="font-medium">Farm Hygiene</p>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-yellow-600 h-2.5 rounded-full" style={{ width: "20%" }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-3 gap-4 mt-6">
        <button className="bg-green-600 text-white py-3 rounded-lg shadow hover:bg-green-700">
          + Add Farm Data
        </button>
        <button className="bg-blue-600 text-white py-3 rounded-lg shadow hover:bg-blue-700">
          Start New Module
        </button>
        <button className="bg-red-600 text-white py-3 rounded-lg shadow hover:bg-red-700">
          Report an Issue
        </button>
      </div>
    </div>
  );
}

export default Home;
