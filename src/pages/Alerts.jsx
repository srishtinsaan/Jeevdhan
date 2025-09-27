import { useState } from "react";
import { AlertTriangle, Info, Bell, X } from "lucide-react";

export default function Alerts() {
  const [filter, setFilter] = useState("all");

  const alerts = [
    { type: "urgent", message: "Avian Influenza detected nearby!", date: "24 Sep 2025" },
    { type: "info", message: "New module on Pig farm hygiene available.", date: "23 Sep 2025" },
    { type: "warning", message: "Check water supply system for contamination risk.", date: "22 Sep 2025" },
  ];

  const filteredAlerts =
    filter === "all" ? alerts : alerts.filter((a) => a.type === filter);

  const getIcon = (type) => {
    switch (type) {
      case "urgent":
        return <AlertTriangle className="text-red-600" />;
      case "info":
        return <Info className="text-blue-600" />;
      case "warning":
        return <Bell className="text-yellow-600" />;
      default:
        return <Bell />;
    }
  };

  const getBgColor = (type) => {
    switch (type) {
      case "urgent":
        return "bg-red-100 border-red-400";
      case "info":
        return "bg-blue-100 border-blue-400";
      case "warning":
        return "bg-yellow-100 border-yellow-400";
      default:
        return "bg-gray-100 border-gray-300";
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Farm Alerts</h2>

      {/* Filter Tabs */}
      <div className="flex gap-3 mb-6">
        {["all", "urgent", "info", "warning"].map((tab) => (
          <button
            key={tab}
            onClick={() => setFilter(tab)}
            className={`px-4 py-2 rounded-full text-sm font-medium border transition ${
              filter === tab
                ? "bg-green-700 text-white border-green-700"
                : "bg-white border-gray-300 text-gray-700 hover:bg-gray-100"
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Alerts List */}
      <div className="space-y-4">
        {filteredAlerts.length > 0 ? (
          filteredAlerts.map((a, i) => (
            <div
              key={i}
              className={`flex items-start justify-between p-4 rounded-xl shadow border ${getBgColor(
                a.type
              )}`}
            >
              <div className="flex items-start gap-3">
                <div className="mt-1">{getIcon(a.type)}</div>
                <div>
                  <p className="font-semibold text-gray-800">{a.message}</p>
                  <span className="text-xs text-gray-600 bg-white px-2 py-1 rounded mt-1 inline-block shadow-sm">
                    {a.date}
                  </span>
                </div>
              </div>
              <button className="text-gray-500 hover:text-gray-800">
                <X size={18} />
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-500 italic">No alerts found.</p>
        )}
      </div>
    </div>
  );
}
