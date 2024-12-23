import { Dispatch } from "react"
import { TodoAction } from '../context/todoReducer';

export type Todo = {
    id: string,
    desc: string,
    completed: boolean
}
export type TodoState = {
    todoCount: number,
    todos: Todo[],
    completed: number,
    pending: number
}
export type TodoContextType = {
    state: TodoState,
    dispatch: Dispatch<TodoAction>
}