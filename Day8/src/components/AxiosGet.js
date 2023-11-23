import axios from "axios";
import { useEffect,useState } from 'react';

function AxiosGet() {
    const [employees,setEmployees] = useState([]);
    useEffect(() => {
        axios
        .get('http://localhost:3002/users')
        .then((res)=>{
            setEmployees(res.data)
        })
        .catch((err)=>{
            console.log(err);
        });
        
    },[]);
    return (
        <div>
            <h1>AXIOS GET</h1>
            <ul>
                {employees.map((employee) => (
                 <li key={employee.id}>{employee.name}</li>
            ))}
            </ul>
        </div>
    );

    
};
export default AxiosGet;