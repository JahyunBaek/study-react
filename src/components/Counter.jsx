import { useState } from "react";

const Counter = ({onClick, flag, setFlag}) => {
    const [counter, setCounter] = useState(1);
    const handleCounter = (e) => {
   

    setCounter(counter + 5);
    setCounter((prevCounter) => prevCounter+1);
    setCounter(counter + 10);
        if(onClick){
            onClick();
        }
        //e.stopPropagation();
    }
    const handleFlag = (e) => {
        setFlag(!flag);
   
    }
    return (
       <>
        <button onClick={handleCounter}>Counter : {counter}</button>
        <button onClick={(e) => handleFlag(e)}>flag : {String(flag)}</button>
      </>
    )
  }

  export default Counter;