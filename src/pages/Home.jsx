import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../appwrite/auth.js";
import Loading from "../components/Loading.jsx";

function Home() {
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

  const handleLogout = async () => {
    await authService.logout();
    navigate("/");
  };

  return (
    <div className="h-screen flex flex-col items-center  bg-green-100">
      {user ? (
        <>
          <h1 className="text-2xl font-bold mt-30">Welcome, {user.name}</h1>

          {/* logout */}

          <button
            onClick={handleLogout}
            className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg"
          >
            Logout
          </button>
        </>
      ) : (
        <Loading/>
      )}
    </div>
  );
}

export default Home;
