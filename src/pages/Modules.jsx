import React from 'react'

function Modules() {
  return (
    <div>
      
    </div>
  )
}

export default Modules

const trainingModules = [
    { id: "t1", title: "Intro to Biosecurity", type: "article", summary: "Practical steps to reduce disease risk on small farms." },
    { id: "t2", title: "Disinfection & Waste", type: "video", summary: "How to disinfect and manage waste safely." },
    { id: "t3", title: "Visitor & Movement Control", type: "article", summary: "Simple visitor protocols and record-keeping." },
  ];

  function TrainingView() {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <h2 className="text-2xl font-semibold mb-4">Training Modules</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {trainingModules.map(m => (
            <div key={m.id} className="bg-white/5 p-4 rounded">
              <div className="font-semibold">{m.title}</div>
              <div className="text-sm text-gray-300 mt-2">{m.summary}</div>
              <div className="mt-4 flex gap-2">
                <button onClick={()=>markTraining(m.id)} className="px-3 py-1 bg-red-600 rounded">Mark complete</button>
                <button onClick={()=>setMessage("Preview not implemented in MVP")} className="px-3 py-1 border border-white/10 rounded">Preview</button>
              </div>
              <div className="text-xs mt-2 text-gray-300">Status: {store.trainingProgress[m.id] ? "Completed" : "Not completed"}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  function ChecklistView() {
    const farmId = "default_farm";
    const initial = store.checklists[farmId]?.items || [
      { key: "isolate_sick", label: "Isolate sick animals", done: false },
      { key: "disinfect_daily", label: "Daily disinfection of key areas", done: false },
      { key: "visitor_log", label: "Maintain visitor log and controls", done: false },
      { key: "feed_verification", label: "Verify feed suppliers", done: false },
    ];
    const [items, setItems] = useState(initial);

    useEffect(()=> {
      setItems(store.checklists[farmId]?.items || initial);
      // eslint-disable-next-line
    }, [store.checklists]);

    const toggle = (idx) => {
      const copy = items.map((it, i) => i === idx ? { ...it, done: !it.done } : it);
      setItems(copy);
    };
    return (
      <div className="max-w-3xl mx-auto p-6">
        <h2 className="text-2xl font-semibold mb-4">Compliance Checklist</h2>
        <p className="text-sm text-gray-300 mb-4">A simple checklist you can update as you implement tasks.</p>

        <div className="bg-white/5 p-4 rounded space-y-3">
          {items.map((it, i)=>(
            <div key={it.key} className="flex items-center justify-between gap-3">
              <div>
                <div className="font-medium">{it.label}</div>
                <div className="text-xs text-gray-300">Status: {it.done ? "Done" : "Pending"}</div>
              </div>
              <div>
                <button onClick={()=>toggle(i)} className={`px-3 py-1 rounded ${it.done ? "bg-green-600" : "bg-white/5"}`}>{it.done ? "Done" : "Mark"}</button>
              </div>
            </div>
          ))}
          <div className="flex justify-end gap-2">
            <button onClick={()=>saveChecklist(farmId, items)} className="px-3 py-2 bg-red-600 rounded">Save</button>
            <button onClick={()=>{ setItems(initial); }} className="px-3 py-2 border border-white/10 rounded">Reset</button>
          </div>
        </div>

        <div className="mt-6">
          <div className="text-sm text-gray-300">Last saved: {store.checklists[farmId]?.updatedAt ? new Date(store.checklists[farmId].updatedAt).toLocaleString() : "Never"}</div>
        </div>
      </div>
    );
  }