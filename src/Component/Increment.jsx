import { useState } from "react";


const Increment=()=>{
    let [abc,setAbc] = useState(0);

    let incre=()=>{
        setAbc(abc+1);
    }
    let decre=()=>{
        setAbc(abc-1);
    }
    let Reset=()=>{
        setAbc(0);
    }


    return(
        <div>
            <h1>{abc}</h1>
            <button onClick={incre}>Increment</button>
            <button onClick={decre}>Decrement</button>
            <button onClick={Reset}>Reset</button>
        </div>
    )
}
export default Increment;