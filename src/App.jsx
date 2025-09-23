import React from 'react'
import Landing from "./pages/Landing"
import Auth from "./pages/Auth"
import Home from "./pages/Home"
import Layout from './pages/Layout'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Alerts from './pages/Alerts'

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
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
