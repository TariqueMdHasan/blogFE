
import './App.css'
import LandingPage from './Page/landingPage'
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './components/register'
import Login from './components/login'
import HomePage from './Page/homePage'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </Router>
  )
}

export default App
