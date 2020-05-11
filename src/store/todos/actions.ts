import { ADD_TODO, TOGGLE_TODO, IAddTodoAction, IToggleTodoAction } from "./types";

export function addTodo(text: string):IAddTodoAction {
    return {
        type: ADD_TODO,
        text: text
    };
}

export function toggleTodo(id: number):IToggleTodoAction {
    return {
        type: TOGGLE_TODO,
        id
    }
}