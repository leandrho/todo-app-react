
import { TodoContext } from "./TodoContext"

type TodoProviderProps = {
    children :JSX.Element | JSX.Element[]
}

export const TodoProvider = ({children}:TodoProviderProps) => {
  return (
        <TodoContext.Provider value={{}}>
            {children}
        </TodoContext.Provider>
  )
}
