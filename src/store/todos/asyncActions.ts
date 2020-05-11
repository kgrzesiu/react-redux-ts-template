import { addTodo } from "./actions"
import { ThunkAction } from "redux-thunk";
import { RootState } from "..";
import { IAddTodoAction } from "./types"

export function asyncAddTodo(text: string): ThunkAction<void, RootState, null, IAddTodoAction> {
    return function (dispatch:any) {
        setTimeout(() => {
            dispatch(addTodo(text))
        }, 2000);
    }

}