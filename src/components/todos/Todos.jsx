import React from "react";
import { useStateContext } from "../../context/AppContext";
const Todos = () => {
  const { todos } = useStateContext();
  return (
    <div className="pt-2 relative">
      {todos.map((todo, index) => (
        <div
          key={index}
          className="flex flex-col flex-wrap max-h-96 overflow-x-auto"
        >
          <h4 className="font-semibold tracking-tight">{todo.title}</h4>
          <p className="max-w-xs overflow-hidden text-ellipsis whitespace-normal text-gray-400 text-sm max-h-10">
            {todo.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Todos;
