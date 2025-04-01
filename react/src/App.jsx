import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{
      backgroundImage: 'url("https://www.m9.news/wp-content/uploads/2022/01/Ram-Charans-First-Reaction-About-RRR-Postponeme.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      height: '100vh',
      width: '100vw',
      color: 'white',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <h1>
        HERO HONDA SPLENDER MACHA BOY IS THUNDER
      </h1>
    </div>
  )
}

export default App