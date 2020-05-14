import React from 'react'
import { RouteComponentProps } from 'react-router-dom'


interface RouterProps { 
    todoId: string 
}

interface ComponentProps extends RouteComponentProps<RouterProps> {

}
// RouteComponentProps<RouterParams>
const TodoDetails: React.SFC<ComponentProps> = (props) => {
    return (
        <div>
            TodoDetails of id: {props.match.params.todoId}
        </div>
    )
}

export default TodoDetails