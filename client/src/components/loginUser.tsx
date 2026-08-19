import { useState } from "react";
import {type ChangeEvent } from "react";

function Login(){
    const handleSubmit = async ()=>{
        console.log(userData);
        event?.preventDefault();
        const url="https://smt-labs-machinetest.onrender.com/api/users/login";
        console.log(userData);
const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json' // Tells the server to expect JSON data
      },
      
      body: JSON.stringify(userData) // Converts JavaScript object to JSON string
    });
console.log(response);
    if(response.ok){
        let data = await response.json();
        console.log(data);
    }
            
      
    }


 const handleInputChange=(e : ChangeEvent<HTMLInputElement>)=>{
    console.log(e.target.value+"\n"+e.target.name+"\n\n");
    setUserData((prev)=>({
        ...prev, [e.target.name]: e.target.value
    }));
  }
    const [userData,setUserData]=useState({
        email:"",
        password:""
    });
    return(
        <form>
            <input name="email"  placeholder="email" value={userData.email} onChange={handleInputChange}/>
            <input name="password" placeholder="password" value={userData.password} onChange={handleInputChange}/>
            <button onClick={handleSubmit}>Submit</button>
        </form>
    )
}

export default Login;