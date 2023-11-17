import React,{useState} from "react";
function SimpleCounter() {
    const[num,setNum]= useState('0');
    const numHandler = () => {
        let val=num;
        setNum(--val);
    };
    const numHandler2 = () => {
        let val2=num;
        setNum(++val2);
    };
    return (
        <div>
            <h1>{num}</h1>
            <button onClick={numHandler2}>Increase</button>
            <button onClick={numHandler}>Decrease</button>
        </div>
    );
}
export default SimpleCounter;