import React from 'react'

function Dashboard() {
  return (
    <div>
      
    </div>
  )
}

export default Dashboard


// 
function DashboardView() {
    const totalAssess = store.assessments.length;
    const highRisk = store.assessments.filter(a => a.level === "High").length;
    const modRisk = store.assessments.filter(a => a.level === "Moderate").length;
    const lowRisk = store.assessments.filter(a => a.level === "Low").length;

    return (
      <div className="max-w-5xl mx-auto p-6">
        <h2 className="text-2xl font-semibold mb-4">Dashboard</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <StatCard label="Assessments" value={totalAssess} />
          <StatCard label="High risk" value={highRisk} tone="red" />
          <StatCard label="Moderate" value={modRisk} tone="yellow" />
          <StatCard label="Low" value={lowRisk} tone="green" />
        </div>

        <div className="bg-white/5 p-4 rounded">
          <h4 className="font-medium mb-3">Recent assessments</h4>
          {store.assessments.slice(0,8).map(a => (
            <div key={a.id} className="p-2 border-b border-white/5">
              <div className="flex justify-between"><div>{a.farmName}</div><div className="text-sm">{a.level}</div></div>
            </div>
          ))}
          {store.assessments.length === 0 && <div className="text-sm text-gray-300 p-2">No assessments yet.</div>}
        </div>
      </div>
    );
  }
  function StatCard({ label, value, tone = "primary" }) {
    const toneClass = tone === "red" ? "bg-red-700" : tone === "yellow" ? "bg-yellow-600" : tone === "green" ? "bg-green-600" : "bg-red-600";
    return (
      <div className="p-4 rounded bg-white/5">
        <div className="text-sm text-gray-300">{label}</div>
        <div className={`text-2xl font-bold mt-2 ${toneClass} inline-block px-3 py-1 rounded`}>{value}</div>
      </div>
    );
  }
