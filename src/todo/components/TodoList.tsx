import { useTodo } from "../hooks/useTodo";
import { Todo } from "../interfaces/interfaces";
import { TodoItem } from "./TodoItem";
export const TodoList = () => {

  const {todos, postAction} = useTodo();
  const toogleTodo = (id: string) => {
    postAction({type: 'toggle-todo', payload: {id}});
  }
  const removeTodo = (id: string) => {
    postAction({type: 'remove-todo', payload: {id}});
  }
  return (
    <div>
      <h2 className="text-red-300 text-3xl">Tareas</h2>
      {
        todos.map((todo: Todo) => (
            <TodoItem key={todo.id} todo={todo} toogleTodo={toogleTodo} removeTodo={removeTodo}/>  
        ))
      }
    </div>
  )
}
