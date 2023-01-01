import React from 'react'

const User = ({users}) => {
  return (
<>
{users.map((user,index)=>(
    <div className='h-44 w-44 flex items-center justify-center flex-col border rounded-sm' key={index}>
        <img src={user.avatar} className="h-20 w-20 border rounded-full p-1" alt={user.name}/>
        <h4>{user.name}</h4>
        <p className='text-gray-300'>{user.email}</p>
    </div>

))}
</> 

)
}

export default User

// new year commit );