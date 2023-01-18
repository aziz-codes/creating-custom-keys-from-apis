import React from 'react'

const Overlay = ({user,handleClose}) => {
    console.log(user);
  return (
    <div className='w-full h-screen bg-slate-500 bg-opacity-50 fixed flex top-0 left-0 flex-col items-center justify-center' onClick={()=>{handleClose()}}>
        <div className='bg-white h-56 w-56 rounded-md flex flex-col items-center justify-center'>
           <img src={user.avatar} className="h-14 w-14 rounded-full" alt={user.name}/>
           <h3>{user.name}</h3>
      <a href={`mailto:${user.email}`} className='hover:text-sky-500 '>{user.email}</a>
        </div>
    </div>
  )
}

export default Overlay