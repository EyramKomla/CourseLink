import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import LandingPage from './pages/Landingpage'
import SignUp from './pages/Signup'
import Login from './pages/login'
import AddSource from './pages/AddSource'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/home' element={<LandingPage/>}/>
        <Route path='/addsource' element={<AddSource/>}/>
      </Routes>
    </>
  )
}

export default App
