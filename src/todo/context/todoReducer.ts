import type { Todo, TodoState } from "../interfaces/interfaces";
let todoNextId = 0;
export type TodoAction = 
        {type: 'add-todo', payload: Todo} |
        {type: 'toggle-todo', payload: {id: string}} 

// export const InitialState : TodoState = {
//     todoCount: 0,
//     todos: [],
//     completed: 0,
//     pending: 0
// }
export const InitialState : TodoState ={
    todoCount: 2,
    todos: [
        {
            id: ++todoNextId+'',
            desc:  "Recolectar las piedras",
            completed: false
        },
        {
            id: ++todoNextId+'',
            desc:  "Recolectar las aguas",
            completed: false
        }
    ],
    completed: 0,
    pending: 0
}
export const todoReducer = (state :TodoState = InitialState, action: TodoAction ) : TodoState =>{

    switch (action.type) {
        case "add-todo":
            console.log('add todo')
            return {
                ...state,
                todos: [...state.todos, {...action.payload, id: ++todoNextId+''}]
            }
        case "toggle-todo":
            console.log('toggle todo')
            return {
                ...state,
                todos: state.todos.map((todo)=>{
                        if(todo.id == action.payload.id){
                            return {
                                ...todo,
                                completed: !todo.completed
                            }
                        }
                        else {
                            return todo
                        }
                    })
            };
        default:
            return state;
    }

}