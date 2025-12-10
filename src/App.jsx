import { useState } from 'react'
import './App.css'
import Card from './components/cards/Card'
function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
        <Card>
          <div>자식 넘기기기</div>
        </Card>
    </main>
  )
}

export default App
