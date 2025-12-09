import { useState } from 'react'
import './App.css'
import Card from './components/cards/Card'
function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
        <Card />
    </main>
  )
}

export default App
