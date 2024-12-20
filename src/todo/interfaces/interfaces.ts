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