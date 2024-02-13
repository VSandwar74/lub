import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Home'
import Yay from './yay'
import { BrowserRouter as Route } from 'react-router-dom';


function App() {
  const [happy, setHappy] = useState(false)

  if (happy) {
    return <Yay />;
  } else {
    return <Home setHappy={setHappy}/>;
  }
}

export default App
