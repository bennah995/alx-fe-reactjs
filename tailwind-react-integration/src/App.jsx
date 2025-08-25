import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Userprofile from './components/UserProfile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Userprofile />
    </div>
  )
}

export default App
