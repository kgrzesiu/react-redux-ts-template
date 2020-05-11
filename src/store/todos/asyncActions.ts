import { addTodo } from "./actions"
import { ThunkAction } from "redux-thunk";
import { RootState } from "..";
import { IAddTodoAction } from "./types"

export function asyncAddTodo(
    text: string
): ThunkAction<void, RootState, null, IAddTodoAction> {
    return (dispatch: any, getState: () => RootState) => {
        setTimeout(() => {
            //get the state in the async action
            console.log(getState())
            //dispatch the proper action
            dispatch(addTodo(text))
        }, 2000);
    }

}