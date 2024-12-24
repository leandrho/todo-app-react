import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

export const useTodo = () => {
  const {state, dispatch} = useContext(TodoContext);
  return {
    todos: state.todos,
    postAction: dispatch,
  }
}
