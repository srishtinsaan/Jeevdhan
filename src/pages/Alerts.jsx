import React from 'react'

function Alerts() {
  return (
     <div className="w-full h-full min-h-screen ">

     </div>
  )
}

export default Alerts

function AlertsView() {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <h2 className="text-2xl font-semibold mb-4">Alerts & Notifications</h2>
        <div className="space-y-3">
          {store.alerts.map(a => (
            <div key={a.id} className={`p-3 rounded ${a.severity === "critical" ? "bg-red-700/40" : "bg-white/5"}`}>
              <div className="flex justify-between items-start">
                <div>
                  <div className="font-semibold">{a.title}</div>
                  <div className="text-xs text-gray-300">{a.region}</div>
                </div>
                <div className="text-xs text-gray-200">{new Date(a.createdAt).toLocaleString()}</div>
              </div>
              <div className="mt-2 text-sm text-gray-200">{/* message could be here */}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }
