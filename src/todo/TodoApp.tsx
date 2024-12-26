
import { TodoForm } from './components/TodoForm';
import { useTodo } from "./hooks/useTodo"
import type { Todo } from "./interfaces/interfaces"


export const TodoApp = () => {
    const {todos} = useTodo();
  return (
    <>
            <TodoForm />
            <h1 className="text-red-300 text-6xl">Todos:</h1>
            {
                todos.map((todo: Todo) => (
                    <div key={todo.id}>
                        <p>{todo.desc}</p>
                    </div>
                ))
            }
        
    </>
  )
}
