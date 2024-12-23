import { TodoApp } from "./todo/TodoApp"
import { TodoProvider } from './todo/context/TodoProvider';

function App() {

  return (
    <>
    <div>
      <TodoProvider>
        <TodoApp />
      </TodoProvider>
     
    </div>
    </>
  )
}

export default App
