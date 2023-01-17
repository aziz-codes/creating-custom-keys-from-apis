import React,{useState,useEffect} from 'react'

const User = ({users}) => {
  const [data,setData]=useState([]);
  const handleChange = (e) =>{
   const filteredData = users.filter((user)=>user.name.toLowerCase().includes(e));
   setData(filteredData);
  }

  useEffect(()=>{
      setData(users);
  },[users]);


  return (
<>
<div className='flex flex-col gap-4'>
  <input type="tex" placeholder='Search' className='border outline-none w-56 p-1 rounded-md' onKeyUp={(e)=>{handleChange(e.target.value)}}/>
<div className='flex flex-row flex-wrap'>
{data.map((user,index)=>(
    <div className='h-44 w-44 flex items-center justify-center flex-col border rounded-sm' key={index}>
        <img src={user.avatar} className="h-20 w-20 border rounded-full p-1" alt={user.name}/>
        <h4>{user.name}</h4>
        <p className='text-gray-300'>{user.email}</p>
    </div>

))}
</div>
</div>
</> 

)
}

export default User

// new year commit );
// tes commit