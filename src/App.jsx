import { useState } from 'react'
// import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Team from './Component/Team'
import Solution from './Component/Solution'
import Contact from './Component/Contact'
import RecentProject from './Component/RecentProject'
import Home from './Component/Home'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/team" element={<Team/>} />
            <Route path="/solution" element={<Solution/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/recentproject" element={<RecentProject/>} />


          </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
