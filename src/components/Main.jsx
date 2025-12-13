import Counter from './Counter';
import { useState } from 'react';
const Main = () => {
  const [counter, setCounter] = useState(0);
  const [flag, setFlag] = useState(false);


  const handleMain = () => {
    setCounter(counter + 1);
  }

    return (
      <main>
        <h1>Main Component : {counter}</h1>
        <h2>flag : {flag.toString()}</h2>
        <button onClick={() => setFlag(!flag)}>flag 토글</button>
        <hr />
       <Counter onClick={handleMain} />
       <hr />
       <Counter onClick={handleMain} />
       <hr />
       <Counter flag={flag} setFlag={setFlag} />
      </main>
    )
  }

  export default Main;