import React, { useState } from "react";

function Toogle() {
    const [name,setName] = useState("BTS");
    const [count,setCount]=useState(0);
    const transformationHandler = () => {
        let v=count;
        setCount(++v);
        if(v==5){
        if(name === "BTS")
        setName("Bangtan");
        else
        setName("BTS");
        }
    };
    return (
        <div>
            <h1>Toogle</h1>
            <hr></hr>
            <h2>{name}</h2>
            <button onClick={transformationHandler}>Toogle</button>
        </div>
    )
}
export default Toogle;