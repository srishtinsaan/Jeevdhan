import React from 'react'
import Landing from "./pages/Landing"
import Auth from "./pages/Auth"
import Home from "./pages/Home"
import Layout from './pages/Layout'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Alerts from './pages/Alerts'
import Modules from './pages/Modules'
import Settings from './pages/Settings'
import RiskAssessment from './pages/Assessments'
import Help from './pages/Help'

function App() {
  return (
    <div className='w-screen h-screen'>
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Landing/>} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/home" element={<Layout/>}>
          <Route index element={<Home />} />
          <Route path='alerts' element={<Alerts/>}/>
          <Route path='modules' element={<Modules/>}/>
          <Route path='assessments' element={<RiskAssessment/>}/>
          <Route path='settings' element={<Settings/>}/>
          <Route path='help' element={<Help/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
