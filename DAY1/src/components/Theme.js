import React,{useState} from "react";
function Theme()
{
    const[color,setColor]=useState("black");
    const colorHandler=()=>{
        let col=color;
        setColor("white");
    };
    return(
        <div>
            <h1>Darkmode</h1>
            <button onClick={colorHandler}>Switch theme</button>

        </div>
    )
}
export default Theme;