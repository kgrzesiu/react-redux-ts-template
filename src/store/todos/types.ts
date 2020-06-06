// Describing the shape of the slice of state
export interface Todo {
    readonly id: number,
    readonly completed: Boolean,
    readonly text: string
}
export interface TodoState {
    todos: Todo[],
    loading: boolean
}

// Describing the different ACTION NAMES available
export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const LOADED_TODOS = "LOADED_TODOS";
export const LOADING_FAILED = "LOADING_FAILED";

export interface IAddTodoAction {
    type: typeof ADD_TODO,
    text: string
}

export interface IToggleTodoAction {
    type: typeof TOGGLE_TODO,
    id: number
}

export interface ILoadedTodosAction {
    type: typeof LOADED_TODOS,
    todos: Todo[]
}

export interface ILoadingFailedTodosAction {
    type: typeof LOADING_FAILED,
    error: string
}

export type TodoActions = IAddTodoAction | IToggleTodoAction | ILoadedTodosAction | ILoadingFailedTodosAction