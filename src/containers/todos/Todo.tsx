import React, { Component, MouseEvent } from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom';

import '../../css/Todo.css'
import { Paper, Button, Theme, createStyles, WithStyles, withStyles } from '@material-ui/core';

interface TodoProps extends RouteComponentProps {
    completed: Boolean,
    text: string,
    key: string,
    id: string,
    onClick: Function
}

const useStyles = ({ spacing }: Theme) => createStyles({
    paper: {
        padding: 5,
        margin: 8
    },
    button: {
      marginLeft: 10,
      marginRight: 10
    },
  });

interface StyleProps extends WithStyles<typeof useStyles> { }

class Todo extends Component<TodoProps & StyleProps> {
    onTodoClick = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        this.props.onClick();
    }

    detailsClickHandler = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        this.props.history.push("/todos/" + this.props.id)
    }

    render() {
        const { classes } = this.props;

        return (
            <Paper style={{
                padding: 5,
                margin: 8
            }}>
                <span style={{textDecoration: this.props.completed ? 'line-through' : 'none'}} >{this.props.text}</span>
                <Button className={classes.button} variant="contained" color="primary" onClick={this.onTodoClick}>TOGGLE</Button>
                <Button className={classes.button} variant="contained" color="primary" onClick={this.detailsClickHandler}>DETAILS</Button>

            </Paper>
        )
    }
}

export default withStyles(useStyles)(withRouter(Todo));