// Describing the shape of the slice of state
export interface Todo {
    readonly id: number,
    readonly completed: Boolean,
    readonly text: String
}
export type TodoState = Todo[];

// Describing the different ACTION NAMES available
export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";

export interface AddTodoAction {
    type: "ADD_TODO",
    text: string
}

export interface ToggleTodoAction {
    type: "TOGGLE_TODO",
    id: number
}

export type TodoActions = AddTodoAction | ToggleTodoAction