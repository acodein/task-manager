import { useState } from "react";

function Counter(){
const [count, setCount] = useState(0);

    function increment(){
         setCount(count+1);
    }

     function decrement(){
        setCount(count-1);
    }

     function reset(){
        setCount(0);
    }

    const status = count > 0 ? "Positive" : count < 0 ? "Negative" : "Zero"
    const appreciate = count === 10 ? "Great job": "Keep going!!"
    return(
        <>
        <h1>{count} is a {status} number</h1>
        <p>{appreciate}</p>
            <button onClick={increment}>
                +
            </button>

            <button onClick={decrement} disabled={count===0}>
                -
            </button>

            <button type="reset" onClick={reset} disabled={count===0}>reset</button>
        </>
    )
}

export default Counter;