import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Routes, Route, Link } from "react-router-dom";

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="bg-green-500 text-white p-4">I SUCCEEDED</div>
    </>
  )
}

export default App
