import { useState } from "react";

const Counter = ({onClick, flag, setFlag}) => {
    const [counter, setCounter] = useState(0);
    console.log('flag',flag);
    console.log('setFlag',setFlag);
    const handleCounter = (e) => {
        setCounter(counter + 1);
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