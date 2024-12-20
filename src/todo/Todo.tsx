import { TodoProvider } from "./context/TodoProvider"
import { TodoState } from "./interfaces/interfaces"

const initialState : TodoState ={
    todoCount: 2,
    todos: [
        {
            id: '1',
            desc:  "Recolectar las piedras",
            completed: false
        },
        {
            id: '2',
            desc:  "Recolectar las aguas",
            completed: false
        }
    ],
    completed: 0,
    pending: 0
}

export const Todo = () => {
  return (
    <>
        <TodoProvider>
            <h1>Todo:</h1>
        </TodoProvider>
        
    </>
  )
}
