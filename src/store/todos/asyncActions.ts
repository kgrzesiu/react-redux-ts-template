import { addTodo } from "./actions"
import { ThunkAction } from "redux-thunk";
import { Dispatch } from "redux";
import { RootState } from "..";
import { IAddTodoAction, Todo } from "./types"
import axiosInstance from './../../services/remote/axios';

export function asyncAddTodo(
    text: string
): ThunkAction<void, RootState, null, IAddTodoAction> {
    return (dispatch: Dispatch, getState: () => RootState) => {
        setTimeout(() => {
            //get the state in the async action
            console.log(getState())
            //dispatch the proper action
            dispatch(addTodo(text))
        }, 2000);
    }
}

export const getTodos = async (): Promise<Todo[]> => {
    const todos: Todo[] = await axiosInstance.get('/todos?userId=1')
      .then(response => {
        return response.data.map((todo: any) => ({
          text: todo.title,
          id: todo.id,
          completed: todo.completed
        }));
      });
    return todos;
}