import { useState, useEffect } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import authService from "../appwrite/auth.js";

export default function Sidebar() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getUser = async () => {
      const currentUser = await authService.getCurrentUser();
      if (!currentUser) {
        navigate("/auth");
      } else {
        setUser(currentUser);
      }
    };
    getUser();
  }, [navigate]);

  return (

    <div className=" fixed left-0 top-0 h-full w-64 text-white p-4 bg-green-700">

      <div className="flex items-center justify-center flex-col p-4">
        
        <h1 className="font-bold text-3xl">Jeevdhan</h1>

        <div className="w-20 h-20 rounded-full bg-white my-3  overflow-hidden">
          <img src="https://plus.unsplash.com/premium_photo-1663945778994-11b3201882a0?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-full h-full object-cover scale-125" alt="" />
        </div>

        {user && <h3 className="font-bold ">{user.name}</h3>}

      </div>

      <nav className="mt-6 flex flex-col gap-2">
        <NavLink to="/home" end className={({ isActive }) => isActive ? "bg-green-900 p-2 rounded" : "p-2 rounded bg-green-700"}>Home</NavLink>
        <NavLink to="/home/alerts" className={({ isActive }) => isActive ? "bg-green-900 p-2 rounded" : "p-2 rounded"}>Alerts</NavLink>
        <NavLink to="/home/modules" className={({ isActive }) => isActive ? "bg-green-900 p-2 rounded" : "p-2 rounded"}>Modules</NavLink>
        <NavLink to="/home/assessments" className={({ isActive }) => isActive ? "bg-green-900 p-2 rounded" : "p-2 rounded"}>Assessments</NavLink>
        <NavLink to="/home/settings" className={({ isActive }) => isActive ? "bg-green-900 p-2 rounded" : "p-2 rounded"}>Settings</NavLink>
        <NavLink to="/home/help" className={({ isActive }) => isActive ? "bg-green-900 p-2 rounded" : "p-2 rounded"}>Help</NavLink>

      </nav>
    </div>
  );
}

