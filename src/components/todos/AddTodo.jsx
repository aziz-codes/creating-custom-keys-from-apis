import React, { useState } from "react";
import { useStateContext } from "../../context/AppContext";
const AddTodo = () => {
  const { todos, setTodos } = useStateContext();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
const [notify,setNotify] = useState(false);
  const handleClick = () => {
    setTodos([
      ...todos,
      {
        title,
        description,
      },
    ]);
    setNotify(true);
       setInterval(() => {
        setNotify(false);
       }, 2000);
       
  };

  return (
    <div className="relative w-1/2 pt-3 flex flex-col gap-2">
      <h4 className="text-center font-semibold tracking-tight">
        Add Your New Todo
      </h4>
      <div className="flex flex-col gap-2 ">
        <label className="text-xs text-slate-600 tracking-wider ml-1 font-semibold">
          title
        </label>
        <input
          type="text"
          placeholder="Enter Title"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          className="text-inputs"
          defaultValue={title}
        />
      </div>
      <div className="flex flex-col gap-2 ">
        <label className="text-xs text-slate-600 tracking-wider ml-1 font-semibold">
          description
        </label>
        <textarea
          rows="4"
          className="outline-none border border-gray-300 rounded-md p-1 -mt-1 w-1/2"
          placeholder="Enter some description"
          defaultValue={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        ></textarea>
      </div>
      <button
        className="mt-2 ml-5 outline-none border-gray-300 bg-sky-500 p-1 rounded-md font-semibold w-32"
        onClick={handleClick}
      >
        Save
      </button>
      {notify && <h4 className="font-semibold tracking-tight text-green-800 animate-pulse">Todo has been added...</h4>}
    </div>
  );
};

export default AddTodo;
