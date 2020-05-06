import React, { Component } from 'react'
import Link from '../components/Link'
import { VisibilityFilters } from '../actions'

interface Props {

}
interface State {

}

class Footer extends Component<any, any> {
    state = {}

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
