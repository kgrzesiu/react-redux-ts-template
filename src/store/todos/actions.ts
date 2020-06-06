import {
    ADD_TODO,
    TOGGLE_TODO,
    FETCH_TODOS_FAILED,
    FETCH_TODOS_START,
    FETCH_TODOS_SUCCESS,
    IAddTodoAction,
    IToggleTodoAction,
    IFetchTodosSuccessAction,
    IFetchTodosFailedAction,
    IFetchTodosStartAction,
    Todo
} from "./types";

import { getTodos } from './asyncActions';
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

export function fetchTodosSuccess(todos: Todo[]): IFetchTodosSuccessAction {
    return {
        type: FETCH_TODOS_SUCCESS,
        todos: todos
    }
}

export function fetchTodosFailed(error:string): IFetchTodosFailedAction {
    return {
        type: FETCH_TODOS_FAILED,
        error: error
    }
}

export function fetchTodosStart(): IFetchTodosStartAction {
    return {
        type: FETCH_TODOS_START
    }
}

export const fetchTodos = (): ThunkAction<void, RootState, null, Action<string>> => {
    return async (dispatch: Dispatch) => {
        dispatch(fetchTodosStart())
        try {
            const asyncResp = await getTodos();
            const todos: Todo[] = asyncResp.slice(0, 6);
            dispatch(fetchTodosSuccess(todos))
        }
        catch (error) {
            console.log('Catched Error',error);
            dispatch(fetchTodosFailed(error));
        }
    }
}