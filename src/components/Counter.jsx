import { useState } from "react";

const Counter = ({onClick}) => {
    const [counter, setCounter] = useState(0);
    const handleCounter = (e) => {
        setCounter(counter + 1);
        onClick();
        //e.stopPropagation();
    }
    return (
       <>
        <button onClick={handleCounter}>Counter : {counter}</button>
      </>
    )
  }

  export default Counter;