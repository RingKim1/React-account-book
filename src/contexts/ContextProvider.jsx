import { createContext, useState } from "react";
import fakeData from "../assets/fakeData";

export const Context = createContext(null);

export default function ContextProvider({ children }) {
  const [expenses, setExpenses] = useState(fakeData);

  return (
    <Context.Provider value={{ expenses, setExpenses }}>
      {children}
    </Context.Provider>
  );
}
