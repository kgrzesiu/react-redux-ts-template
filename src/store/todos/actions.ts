import { ADD_TODO, TOGGLE_TODO, AddTodoAction, ToggleTodoAction } from "./types";

export function addTodo(text: string):AddTodoAction {
    return {
        type: ADD_TODO,
        text: text
    };
}

export function toggleTodo(id: number):ToggleTodoAction {
    return {
        type: TOGGLE_TODO,
        id
    }
}