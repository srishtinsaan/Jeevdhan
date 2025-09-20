import {useNavigate} from "react-router-dom"
import Navbar from "../components/Navbar"


function Landing() {
    const navigate = useNavigate();
    const handleclick = () => {
        navigate("/auth")
    }

  return (
    <div className='w-full h-full  flex justify-center items-center'>
      <Navbar/>
      <button className='border' onClick={() => handleclick()}>Get Started</button>


    </div>
  )
}

export default Landing
