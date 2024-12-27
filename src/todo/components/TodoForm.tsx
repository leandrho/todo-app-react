import { FormEvent, useRef } from 'react'
import { useTodo } from '../hooks/useTodo';
import { Todo } from '../interfaces/interfaces';

export const TodoForm = () => {

  const todoInput = useRef<HTMLInputElement>(null)
  const { postAction } = useTodo();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(todoInput.current){

      const todoText: string = todoInput.current.value;
      const newTodo: Todo = {id: '', desc: todoText, completed: false};

      if( todoText.length > 0 ){
        postAction({ type: 'add-todo', payload: newTodo });
        todoInput.current.value = '';
      }
    }
  }

  return (
    <form action="" className="flex gap-4 p-8 bg-red-100 max-w-fit rounded-lg mb-4 shadow-sm" onSubmit={(e)=>handleSubmit(e)}>
        <div className="flex flex-col gap-2 flex-grow ">
          <label htmlFor="todo" className="text-slate-800 font-semibold">Nueva tarea</label>
          <input ref={todoInput} id='todo' type="text" className="min-w-80 border border-red-200 rounded-lg min-h-10 p-2 outline-none"></input>
        </div>
        <button type="submit" className="text-[15px] min-w-24 bg-slate-600 rounded-lg text-red-300 font-bold hover:bg-slate-500">Agregar</button>
    </form>
  )
}
