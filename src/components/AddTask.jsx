import { useState } from "react";

function AddTask({add}){
    const [input,setInput] = useState("");

    function handleClick(){ 
        add(input)
        setInput("")
    }

    return(
        <>
            <input 
                type="text" 
                placeholder="task" 
                onChange={(e)=>setInput(e.target.value)} 
                value={input}/>

            <button 
                type="submit" 
                onClick={handleClick}>Add</button>
        </>
    )
}

export default AddTask;