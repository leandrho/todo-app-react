import type { Todo, TodoState } from "../interfaces/interfaces";

type TodoAction = 
        {type: 'add-todo', payload: Todo} |
        {type: 'toggle-todo', payload: {id: string}} 

export const todoReducer = (state :TodoState, action: TodoAction ) : TodoState =>{

    switch (action.type) {
        case "add-todo":
            
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        default:
            return state;
    }

}