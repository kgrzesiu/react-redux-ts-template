import {
    ADD_TODO,
    TOGGLE_TODO,
    LOADED_TODOS,
    LOADING_FAILED,
    IAddTodoAction,
    IToggleTodoAction,
    ILoadedTodosAction,
    ILoadingFailedTodosAction,
    Todo
} from "./types";

import { getTodos } from './../../services/remote/todosService';
import { ThunkAction } from "redux-thunk";
import { Action, Dispatch } from "redux";
import { RootState } from "..";

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

export function loadedTodos(todos: Todo[]): ILoadedTodosAction {
    return {
        type: LOADED_TODOS,
        todos: todos
    }
}

export function failedToLoadedTodos(error:string): ILoadingFailedTodosAction {
    return {
        type: LOADING_FAILED,
        error: error
    }
}

export const fetchTodos = (): ThunkAction<void, RootState, null, Action<string>> => {
    return async (dispatch: Dispatch) => {
        try {
            const asyncResp = await getTodos();
            const todos: Todo[] = asyncResp.slice(0, 6);
            dispatch(loadedTodos(todos))
        }
        catch (error) {
            console.log('Catched Error',error);
            dispatch(failedToLoadedTodos(error));
        }
    }
}