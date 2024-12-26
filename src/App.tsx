import { TodoApp } from "./todo/TodoApp"
import { TodoProvider } from './todo/context/TodoProvider';

function App() {

  return (
    <>
    <div className="min-h-screen flex flex-col items-center mt-16">
      <TodoProvider>
        <TodoApp />
      </TodoProvider>
    </div>
    </>
  )
}

export default App
