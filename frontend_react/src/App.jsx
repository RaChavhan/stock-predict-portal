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
import Dashboard from './components/Dashboard'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'


function App() {
  
  return (
    <>
    <AuthProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main_Inner />}/>
            
            <Route path='/Register' element={<PublicRoute><Register/></PublicRoute>} />
            <Route path='/login' element={<PublicRoute><Login/></PublicRoute>} />
            <Route path='/dashboard' element={ <PrivateRoute><Dashboard/></PrivateRoute>} />
          
        </Routes>
        <Footer />
      </BrowserRouter>
</AuthProvider>

    </>
  )
}

export default App
