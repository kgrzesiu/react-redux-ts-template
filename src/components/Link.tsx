import React, { Component, ReactNode } from 'react'
import { connect } from 'react-redux'
import { VisibilityFilters } from '../store/visibilityFilters/types';
import { setVisibilityFilter } from '../store/visibilityFilters/actions';
import { RootState } from '../store';

interface Props {
    children: ReactNode;
    filter: VisibilityFilters;
}

interface ActionProps {
    setVisibilityFilter: typeof setVisibilityFilter
}

type ResultProps = Props & ActionProps & ReturnType<typeof mapStateToProps>;

class Link extends Component<ResultProps> {

    handleVisibilityClick = () => {
        this.props.setVisibilityFilter(this.props.filter);
    }

    render() {
        return (
            <button
                onClick={this.handleVisibilityClick}
                style={{ marginLeft: '4px' }}
                disabled={this.props.active}
            >
                {this.props.children}
            </button>
        )
    }
}

const mapStateToProps = (state: RootState, ownProps: Props) => ({
    active: ownProps.filter === state.visibilityFilter
})

export default connect(
    mapStateToProps,
    { setVisibilityFilter }
)(Link)
