import React, { Component, ReactNode } from 'react'
import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'

interface Props {
    children:ReactNode,
    filter:String,  
}

interface State {
    
}

class Link extends Component<any> {
    state = {}

    render() {
        return (
            <button
                onClick={this.props.filterClick}
                style={{ marginLeft: '4px'}}
                disabled={this.props.active}
                >
                {this.props.children}
            </button>
        )
    }
}

const mapStateToProps = (state:any, ownProps:Props) => ({
    active: ownProps.filter === state.visibilityFilter
})

const mapDispatchToProps = (dispatch: any, ownProps:Props) => ({
    filterClick: () => dispatch(setVisibilityFilter(ownProps.filter))
})

export default connect(mapStateToProps, mapDispatchToProps)(Link)
