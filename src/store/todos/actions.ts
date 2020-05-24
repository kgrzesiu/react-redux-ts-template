import {
    ADD_TODO,
    TOGGLE_TODO,
    REPLACE_TODOS,
    IAddTodoAction,
    IToggleTodoAction,
    IReplaceTodosAction,
    Todo
} from "./types";


export function addTodo(text: string): IAddTodoAction {
    return {
        type: ADD_TODO,
        text: text
    };
}

export function toggleTodo(id: number): IToggleTodoAction {
    return {
        type: TOGGLE_TODO,
        id
    }
}

export function replaceTodos(todos: Todo[]): IReplaceTodosAction {
    return {
        type: REPLACE_TODOS,
        todos: todos
    }
}