import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import Footer from './Footer'
import Main_Inner from './Main_Inner'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Header/>
      </div>
      
      <div className='main'>
        <Main_Inner/>
      </div>

      <div>
        <Footer/>
      </div>
    </>
  )
}

export default App
