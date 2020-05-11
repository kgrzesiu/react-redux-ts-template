import React, { Component } from 'react'
import Link from './Link'
import { VisibilityFilters } from '../../store/visibilityFilters/types'

class Footer extends Component {
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
