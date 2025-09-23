import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";


export default function Layout() {

  return (
    <div className="flex">

      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <div className="ml-64 flex-1 min-h-screen">
        <Outlet />
      </div>
    </div>
  );
}
