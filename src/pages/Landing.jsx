import {useNavigate} from "react-router-dom"
import Navbar from "../components/Navbar"


function Landing() {
    const navigate = useNavigate();
    const handleclick = () => {
        navigate("/auth")
    }

  return (
    <div className='w-full h-full  flex flex-col  items-center bg-green-500'>
      <Navbar/>
      <div className="mt-50">
        <button className='border' onClick={() => handleclick()}>Get Started</button>
      </div>

    </div>
  )
}

export default Landing
