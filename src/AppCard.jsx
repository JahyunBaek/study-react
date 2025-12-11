import { useState } from 'react'
import './AppCard.css'
import Card from './components/cards/Card'
import CardForm from './components/cards/CardForm'
function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
        <CardForm />
        <Card>
          <div>자식 넘기기기</div>
        </Card>
    </main>
  )
}

export default App
