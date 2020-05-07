import React, { Component } from 'react'
import Link from '../components/Link'
import { VisibilityFilters } from '../actions'

enum WORK_LOAD {
    doable = "doable",
    hard = "hard",
    insance = "insane"    
}

interface IState {
    workloadState: WORK_LOAD;
}

class Footer extends Component<any, IState> {
    readonly state = { workloadState: WORK_LOAD.doable}

    render() {
        return (
            <div>
                <span>Show:</span>
                <Link filter={VisibilityFilters.SHOW_ALL}>All</Link>
                <Link filter={VisibilityFilters.SHOW_ACTIVE}>Active</Link>
                <Link filter={VisibilityFilters.SHOW_COMPLETED}>Completed</Link>
            </div>
        )
    }
}

export default Footer