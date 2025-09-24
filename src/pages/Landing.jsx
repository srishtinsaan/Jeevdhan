import { useNavigate } from "react-router-dom";

function Landing() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/auth");
  };

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-green-700 text-white px-4">
      
      {/* Logo / Title */}
      <h1 className="text-5xl font-bold mb-6 text-center">Jeevdhan</h1>
      
      {/* Description */}
      <p className="text-center max-w-xl text-lg mb-10">
        A digital biosecurity platform for small and medium-scale livestock farms. 
        Provides farmers with customizable risk assessments, compliance checklists, 
        training modules, real-time alerts, and a dashboard to monitor and improve farm-level biosecurity.
      </p>

      {/* Get Started Button */}
      <button
        onClick={handleClick}
        className="bg-white text-green-700 font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition"
      >
        Get Started
      </button>

      {/* Simple decorative circles */}
      <div className="absolute top-10 left-10 w-24 h-24 bg-white/20 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 right-16 w-32 h-32 bg-white/10 rounded-full animate-pulse"></div>
      <div className="absolute top-1/2 right-10 w-16 h-16 bg-white/20 rounded-full animate-pulse"></div>

    </div>
  );
}

export default Landing;
