import React, { Component, MouseEvent } from 'react'
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
    workload: WORK_LOAD;
}

class Footer extends Component<ConnectedProps<typeof reduxConnector>, IState> {
    //state here is not used but showed for demo purposes
    readonly state = { workload: WORK_LOAD.doable}

    getWorkLoad(count:number):WORK_LOAD {
        if (count < 3){
            return WORK_LOAD.doable
        } else if (count < 5){
            return WORK_LOAD.hard
        } else {
            return WORK_LOAD.insance
        }
    }

    getWorkLoadState = (event:MouseEvent) => {
        this.setState({ workload:this.getWorkLoad(this.props.todoCount) })
    }

    render() {
        return (
            <div>
                <span>Show:</span>
                <Link filter={VisibilityFilters.SHOW_ALL}>All</Link>
                <Link filter={VisibilityFilters.SHOW_ACTIVE}>Active</Link>
                <Link filter={VisibilityFilters.SHOW_COMPLETED}>Completed</Link>
                <div>To complete: {this.props.todoCount}</div>
                <button onClick={this.getWorkLoadState}>Get Workload state</button>
                <div>Workload: {this.state.workload}</div>
            </div>
        )
    }
}

const mapStateToProps = (state: RootState) => ({
    todoCount: state.todos.filter(todo => !todo.completed).length
});

const reduxConnector = connect(mapStateToProps)

export default reduxConnector(Footer)
