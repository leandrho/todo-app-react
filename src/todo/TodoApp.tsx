
import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';


export const TodoApp = () => {

  return (
    <>
      <h1 className='text-slate-800 text-lg font-bold mb-4 tracking-[4px] uppercase'>Tareas App</h1>
      <main className='flex flex-col gap-8'>
            <TodoForm />
            <TodoList />
      </main>
    </>
  )
}
