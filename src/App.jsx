import React from 'react'
import Landing from "./pages/Landing"
import Auth from "./pages/Auth"
import Home from "./pages/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className='w-screen h-screen'>
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Landing/>} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
