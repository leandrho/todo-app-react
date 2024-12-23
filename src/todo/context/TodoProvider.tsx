
import { useReducer } from "react"
import { TodoContext } from "./TodoContext"
import { InitialState, todoReducer } from "./todoReducer"

type TodoProviderProps = {
    children :JSX.Element | JSX.Element[]
}

export const TodoProvider = ({children}:TodoProviderProps) => {
  
  const [state, dispatch] = useReducer(todoReducer, InitialState);
  
  return (
        <TodoContext.Provider value={{
            state,
            dispatch
        }}>
            {children}
        </TodoContext.Provider>
  )
}
