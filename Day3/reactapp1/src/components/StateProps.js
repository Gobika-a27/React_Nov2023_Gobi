import {useState} from "react";
function StateProps() {
    const[name,setName]=useState("Ashh💕");
    const[num,setNum]=useState(21);
    const[student,setStudent]=useState({name:"ash",num:'21'})
    const nameHandler = () => {
    setName("129💕");
};
const numHandler =() => {
    let value = num;
    setNum(++value);
};
    return (
        <div>
        <h1>StateProps</h1>
        <h2>Hey!{name}</h2>
        <h2>Student age is{num}</h2>
        <h2>name is{student.name} and age is {student.num}</h2>
        <button onClick={nameHandler}>Change Name</button>
        <button onClick={numHandler}>Increament Number</button>
        </div>
    );
}
export default StateProps;
