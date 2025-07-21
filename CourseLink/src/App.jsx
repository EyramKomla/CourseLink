import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import LandingPage from './pages/landingpage'
import SignIn from './pages/signin'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/landing' element={<LandingPage/>}/>
        <Route path='/' element={<SignIn/>}/>
      </Routes>
    </>
  )
}

export default App
