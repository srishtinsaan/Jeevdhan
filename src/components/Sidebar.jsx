// src/components/Sidebar.jsx
import React from "react";
import { NavLink } from "react-router-dom";

export default function Sidebar({ isOpen, toggle }) {
  return (
    <div className={`bg-green-700 text-white ${isOpen ? "w-64" : "w-16"} transition-width duration-300 min-h-screen`}>
      <div className="flex items-center justify-between p-4">
        {isOpen && <span className="font-bold text-lg">Agrobe</span>}
        <button onClick={toggle}>{isOpen ? "<<" : ">>"}</button>
      </div>
      <nav className="mt-6 flex flex-col gap-2">
        <NavLink to="/home" className={({ isActive }) => isActive ? "bg-green-900 p-2 rounded" : "p-2 rounded"}>Home</NavLink>
        <NavLink to="/farms" className={({ isActive }) => isActive ? "bg-green-900 p-2 rounded" : "p-2 rounded"}>All Farms</NavLink>
        <NavLink to="/subsidies" className={({ isActive }) => isActive ? "bg-green-900 p-2 rounded" : "p-2 rounded"}>Gov Subsidies</NavLink>
        <NavLink to="/settings" className={({ isActive }) => isActive ? "bg-green-900 p-2 rounded" : "p-2 rounded"}>Settings</NavLink>
      </nav>
    </div>
  );
}
