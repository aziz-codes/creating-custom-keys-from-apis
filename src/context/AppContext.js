import React, { useState, createContext, useContext } from "react";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const name = "Aziz";
  return(<AppContext.Provider
    value={{
      todos,
      setTodos,
      name,
    }}
  >
    {children}
  </AppContext.Provider>
  );
};

export const useStateContext = () => useContext(AppContext);
