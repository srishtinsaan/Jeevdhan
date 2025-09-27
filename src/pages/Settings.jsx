import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../appwrite/auth";

function Settings() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");

  // Load current user info
  useEffect(() => {
    const fetchUser = async () => {
      const currentUser = await authService.getCurrentUser();
      if (currentUser) {
        setUser(currentUser);
        setFormData({
          name: currentUser.name || "",
          email: currentUser.email || "",
          password: "",
        });
      }
    };
    fetchUser();
  }, []);

  const handleLogout = async () => {
    await authService.logout();
    navigate("/");
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      // Placeholder logic (replace with Appwrite update calls)
      console.log("Updated:", formData);
      setMessage("✅ Profile updated successfully!");
    } catch (error) {
      setMessage("❌ Failed to update profile. Try again.");
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-green-700">⚙️ Settings</h2>

      {/* Profile Update Form */}
      <div className="bg-white p-6 rounded-xl shadow mb-6">
        <form className="flex flex-col gap-4" onSubmit={handleSave}>
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="border p-2 rounded w-full"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border p-2 rounded w-full"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">New Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Leave blank if not changing"
              className="border p-2 rounded w-full"
            />
          </div>

          <button
            type="submit"
            className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800 transition"
          >
            Save Changes
          </button>
        </form>

        {message && (
          <p className="mt-4 text-sm font-medium text-green-600">{message}</p>
        )}
      </div>

      {/* Logout Card */}
      <div className="bg-red-100 p-6 rounded-xl shadow flex justify-between items-center">
        <p className="font-semibold text-red-600">Want to sign out?</p>
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Settings;
