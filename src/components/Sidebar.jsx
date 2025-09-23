// src/components/Sidebar.jsx
import { NavLink } from "react-router-dom";

// Sidebar.jsx
export default function Sidebar() {
  return (

    <div className=" fixed left-0 top-0 h-full w-64 text-white p-4 bg-green-700">

      <div className="flex items-center justify-center p-4">
        <span className="font-bold text-lg">Jeevdhan</span>
      </div>

      <nav className="mt-6 flex flex-col gap-2">
        <NavLink to="/home" className={({ isActive }) => isActive ? "bg-green-900 p-2 rounded" : "p-2 rounded"}>Home</NavLink>
        <NavLink to="/home/alerts" className={({ isActive }) => isActive ? "bg-green-900 p-2 rounded" : "p-2 rounded"}>Alerts</NavLink>
      </nav>
    </div>
  );
}

