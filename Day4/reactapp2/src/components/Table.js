import React,{useState}from "react";
function Table(){
    const[Employee]=useState(
        [
            {
                empid:1,
                name:"Darla",
                salary:10000,
                
            },
            {
                empid:2,
                name:"Ash",
                salary:20000,
            },
            {
                empid:3,
                name:"bulukrani",
                salary:5000000,
            }
        ]
    );
    return (
        <div>
            <h1>Table</h1>
            <hr></hr>
            <table cellPadding="10px" border="1" align="center">
                <tr>
                    <th>Emp id</th>
                    <th>Name</th>
                
                </tr>
                {Employee.map((emp)=>(

                    <tr key={emp.empid}>
                    <td>{emp.empid}</td>
                    <td>{emp.name}</td>
                   </tr>
           ))}
                
            </table>
        </div>
    );
}
export default Table;