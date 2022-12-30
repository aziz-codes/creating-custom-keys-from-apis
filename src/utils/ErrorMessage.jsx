import React from 'react'

const ErrorMessage = ({message}) => {
  return (
    <div className='w-full min-h-screen flex flex-col justify-center items-center'>
       <h4 className='text-xl font-semibold tracking-tight'>Oop's!! seems like you are not conencted</h4>
       <label className='text-sky-500'>But it's not your fault</label>
       <span className='font-bold text-red-500'>{message}</span>
       <h4 >Retrying <span className='animate-ping'>. . .</span></h4>
    </div>
  )
}

export default ErrorMessage