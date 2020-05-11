import React, { Component } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import Link from './Link'
import { VisibilityFilters } from '../../store/visibilityFilters/types'
import { RootState } from '../../store'

enum WORK_LOAD {
    doable = "doable",
    hard = "hard",
    insance = "insane"    
}

interface IState {
    workloadState: WORK_LOAD;
}

class Footer extends Component<ConnectedProps<typeof reduxConnector>, IState> {
    readonly state = { workloadState: WORK_LOAD.doable}

    getWorkLoad(count:number):WORK_LOAD {
        if (count < 3){
            return WORK_LOAD.doable
        } else if (count < 5){
            return WORK_LOAD.hard
        } else {
            return WORK_LOAD.insance
        }
    }

    render() {
        return (
            <div>
                <span>Show:</span>
                <Link filter={VisibilityFilters.SHOW_ALL}>All</Link>
                <Link filter={VisibilityFilters.SHOW_ACTIVE}>Active</Link>
                <Link filter={VisibilityFilters.SHOW_COMPLETED}>Completed</Link>
                <div>Workload of todos: {this.getWorkLoad(this.props.todoCount)}</div>
            </div>
        )
    }
}

const mapStateToProps = (state: RootState) => ({
    todoCount: state.todos.length
});

const reduxConnector = connect(mapStateToProps)

export default reduxConnector(Footer)
