import { useNavigate } from 'react-router-dom';
import authService from '../appwrite/auth';

function Settings() {
  const navigate = useNavigate()

  const handleLogout = async () => {
    await authService.logout();
    navigate("/");
  };

  return (
    <div className='flex justify-center items-center mt-50'>
      {/* logout */}

          <button
            onClick={handleLogout}
            className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg"
          >
            Logout
          </button>
    </div>
  )
}

export default Settings
