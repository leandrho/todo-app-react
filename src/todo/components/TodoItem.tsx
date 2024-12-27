import { Todo } from "../interfaces/interfaces"

type TodoItemProps = {
  todo: Todo;
  toogleTodo: (id: string) => void;
  removeTodo: (id: string) => void;
}
export const TodoItem = ({todo, toogleTodo, removeTodo}:TodoItemProps) => {

  return (
    <div className="py-6 px-4 border-b border-slate-300 flex justify-between items-center">
      <p className={"cursor-pointer text-slate-800 " + (todo.completed ? ' line-through text-slate-300' : '')}
          onClick={()=>toogleTodo(todo.id)}
      >
        {todo.desc}
      </p>
      <button aria-label="Delete todo" className="text-slate-600 hover:text-red-400" onClick={()=>removeTodo(todo.id)}>
        <svg width="24" height="24" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="currentColor" stroke="currentColor"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="currentColor" d="M352 192V95.936a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V192h256a32 32 0 1 1 0 64H96a32 32 0 0 1 0-64h256zm64 0h192v-64H416v64zM192 960a32 32 0 0 1-32-32V256h704v672a32 32 0 0 1-32 32H192zm224-192a32 32 0 0 0 32-32V416a32 32 0 0 0-64 0v320a32 32 0 0 0 32 32zm192 0a32 32 0 0 0 32-32V416a32 32 0 0 0-64 0v320a32 32 0 0 0 32 32z"></path></g></svg>
      </button>
    </div>
  )
}
