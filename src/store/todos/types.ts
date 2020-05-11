// Describing the shape of the slice of state
export interface Todo {
    readonly id: number,
    readonly completed: Boolean,
    readonly text: string
}
export type TodoState = Todo[];

// Describing the different ACTION NAMES available
export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";

export interface IAddTodoAction {
    type: typeof ADD_TODO,
    text: string
}

export interface IToggleTodoAction {
    type: typeof TOGGLE_TODO,
    id: number
}

export type TodoActions = IAddTodoAction | IToggleTodoAction