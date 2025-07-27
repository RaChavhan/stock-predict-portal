import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Main_Inner from './Main_Inner'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './assets/CSS/style.css'
import Register from './components/Register'
import Login from './components/Login'
import AuthProvider from './AuthProvider'


function App() {
  
  return (
    <>
    <AuthProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main_Inner />}/>
            
            <Route path='/Register' element={<Register/>} />
            <Route path='/login' element={<Login/>} />
          
        </Routes>
        <Footer />
      </BrowserRouter>
</AuthProvider>

    </>
  )
}

export default App
