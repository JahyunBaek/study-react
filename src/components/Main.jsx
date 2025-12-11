import Counter from './Counter';
import { useState } from 'react';
function Main(){
  const [counter, setCounter] = useState(0);
  const handleMain = () => {
    setCounter(counter + 1);
  }
    return (
      <main>
        <h1>Main Component : {counter}</h1>
       <Counter onClick={handleMain} />
       <br />
       <br />
       <Counter onClick={handleMain} />
      </main>
    )
  }

  export default Main;