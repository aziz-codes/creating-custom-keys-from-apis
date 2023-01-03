import { useState,useEffect } from "react";
import User from "./components/User";
import { getRequest } from "./services/ApiCalls";
import ErrorMessage from "./utils/ErrorMessage";

const  App=()=> {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

 const [errorMessage, setErrorMessage] = useState("");
  const [connectionStatus, setConnectionStatus] = useState(navigator.onLine);
useEffect(()=>{
  window.addEventListener('online',()=>{
    setConnectionStatus(true);
  });
  window.addEventListener('offline',()=>{
    setConnectionStatus(false);
  })
})
  useEffect(()=>{
    setLoading(true);
    getRequest().then((response)=>{
      const {data} = response.data;
     const list= data.map((user)=>(
        {
          name: user.first_name+" "+user.last_name,
          email: user.email,
          avatar: user.avatar
        }
      ))
      setUsers(list);
    })
    .catch((err)=>{
      setErrorMessage(err.message);
    })
    setLoading(false);
  },[connectionStatus])


  return (
    <div className="App">
       <div className="w-full flex flex-row flex-wrap gap-4 mt-4 px-4 justify-center">{loading ? "Loading ": <User users={users}/>}</div>
     {connectionStatus ? null :<ErrorMessage message={errorMessage}/>}
     {loading && "Loading"}
    </div>
  );
}

export default App;
