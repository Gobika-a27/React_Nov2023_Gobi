import React,{useState} from "react";
function SimpleCounter {
    const[num,setNum]=useState("0");
    const numHandler = () => {
        let val=num;
        setNum(++val);
    };
    const decreHandler =() => {
        let val2=num;
        setNum(--val2);
    };

return (
    <div>
        <h1>{num}</h1>
        <button onClick ={numHandler}>Increase</button>
        <button onClick ={decreHandler}>Decrease</button>
    </div>
  
);
    
}