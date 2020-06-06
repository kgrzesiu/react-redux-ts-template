// Describing the shape of the slice of state
export interface Todo {
    readonly id: number,
    readonly completed: Boolean,
    readonly text: string
}
export interface TodoState {
    todos: Todo[],
    loading: boolean,
    error?: string
}

// Describing the different ACTION NAMES available
export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";

export const FETCH_TODOS_START = "FETCH_TODOS_START";
export const FETCH_TODOS_SUCCESS = "FETCH_TODOS_SUCCESS";
export const FETCH_TODOS_FAILED = "FETCH_TODOS_FAILED";

export interface IAddTodoAction {
    type: typeof ADD_TODO,
    text: string
}

export interface IToggleTodoAction {
    type: typeof TOGGLE_TODO,
    id: number
}

export interface IFetchTodosSuccessAction {
    type: typeof FETCH_TODOS_SUCCESS,
    todos: Todo[]
}

export interface IFetchTodosFailedAction {
    type: typeof FETCH_TODOS_FAILED,
    error: string
}

export interface IFetchTodosStartAction {
    type: typeof FETCH_TODOS_START
}

export type TodoActions =
    IAddTodoAction |
    IToggleTodoAction |
    IFetchTodosSuccessAction |
    IFetchTodosFailedAction |
    IFetchTodosStartAction;