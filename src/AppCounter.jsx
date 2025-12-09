import { useState } from 'react'
import './AppCounter.css'
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';


function AppCounter() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
        <Main />
    <Footer />
    </>
  )
}

export default AppCounter;
