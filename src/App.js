import { useState,useEffect } from "react";
import { getRequest } from "./services/ApiCalls";
const  App=()=> {
   
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    getRequest().then((response)=>{
      const {data} = response.data;
      setUsers(data)
    })
  },[])


  return (
    <div className="App text-red-500">
       <p>lenght is{users.length}</p>
    </div>
  );
}

export default App;
