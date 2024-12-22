import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

export const useTodo = () => {
    const {todos, setTodos} = useContext(TodoContext);

  return {
    todoslist: todos,

  }
}
