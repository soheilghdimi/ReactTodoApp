import {createContext, useReducer} from "react";
import data from "../TodoList/data";
import reducer from "./Reducer";


export const TodoContext = createContext({ todoList: [], dispatch: () => { } })

const TodoContextProvider = ({children}) => {
    const [todoList,dispatch]=useReducer(reducer,data)
  return (
      <TodoContext.Provider value={{ todoList, dispatch }}>
          {children}
      </TodoContext.Provider>
  )
}
export default TodoContextProvider;
