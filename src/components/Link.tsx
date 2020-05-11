import React, { Component, ReactNode, Dispatch } from 'react'
import { connect } from 'react-redux'
import { setVisibilityFilter, VisibilityFilters } from '../actions'
import { RootState } from '../reducers';

interface Props {
    children:ReactNode,
    filter:VisibilityFilters,  
}

type ReduxProps = ReturnType<typeof mapDispatchToProps> & ReturnType<typeof mapStateToProps>
type ResultProps = Props & ReduxProps;

class Link extends Component<ResultProps> {
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

const mapStateToProps = (state:RootState, ownProps:Props) => ({
    active: ownProps.filter === state.visibilityFilter
})

const mapDispatchToProps = (dispatch: Dispatch<any>, ownProps:Props) => ({
    filterClick: () => dispatch(setVisibilityFilter(ownProps.filter))
})

export default connect(mapStateToProps, mapDispatchToProps)(Link)
