import { ADD_TODO, TOGGLE_TODO } from "./types";

export function addTodo(text: String) {
    return {
        type: ADD_TODO,
        text: text
    };
}

export function toggleTodo(id: number) {
    return {
        type: TOGGLE_TODO,
        id
    }
}