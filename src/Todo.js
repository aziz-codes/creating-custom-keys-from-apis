import React from 'react'
import AddTodo from './components/todos/AddTodo';
import Todos from './components/todos/Todos';
const Todo = () => {
  return (
    <div className='w-full flex flex-row justify-around flex-1'>
        <AddTodo />
        <Todos />
    </div>
  )
}

export default Todo