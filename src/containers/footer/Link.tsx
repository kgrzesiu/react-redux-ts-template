import React, { Component, ReactNode } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { VisibilityFilters } from '../../store/visibilityFilters/types';
import { setVisibilityFilter } from '../../store/visibilityFilters/actions';
import { RootState } from '../../store';
import { Button } from '@material-ui/core';

interface Props {
    children: ReactNode;
    filter: VisibilityFilters;
}

type ComponentProps = Props & ConnectedProps<typeof reduxConnector>;

class Link extends Component<ComponentProps> {

    handleVisibilityClick = () => {
        this.props.setVisibilityFilter(this.props.filter);
    }

    render() {
        return (
            <Button
                variant="contained"
                disabled={this.props.active}
                onClick={this.handleVisibilityClick}
                style={{ marginLeft: '10px' }}
            >
                {this.props.children}
            </Button>
        )
    }
}

const mapStateToProps = (state: RootState, ownProps: Props) => ({
    active: ownProps.filter === state.visibilityFilter
});

const reduxConnector = connect(
    mapStateToProps,
    { setVisibilityFilter }
);

export default reduxConnector(Link)
