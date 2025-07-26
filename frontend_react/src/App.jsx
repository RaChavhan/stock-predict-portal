import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Header from './Header'
import Footer from './Footer'
import Main_Inner from './Main_Inner'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './assets/CSS/style.css'
import Register from './Register'
import Login from './Login'

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main_Inner />}/>
            
            <Route path='/Register' element={<Register/>} />
            <Route path='/login' element={<Login/>} />
          
        </Routes>
        <Footer />
      </BrowserRouter>


    </>
  )
}

export default App
